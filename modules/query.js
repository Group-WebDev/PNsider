const Post = require('../model/Post')
function analytics(category, number) {
    return new Promise((resolve, reject) => {
        //kulang og match para sa date, batch
        Post.aggregate([
            {
                $group: {
                    _id: `$categories.${category}.Q${number}`,
                    answers: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 1,
                    description: { $ifNull: ["Q" + number, "Unspecified"] },
                    answers: 1
                }
            }
        ])
            .then((data) => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function previousAnswers(filter){
    return new Promise((resolve, reject) =>{
         Post.find(filter)
         .then(doc =>{
             if(doc){
                 resolve(doc)
             }else{
                resolve("no answers found")
             }
         })  
         .catch(err => {
             reject(err)
         }) 
    })
}



module.exports = {
    analytics,
    add

}