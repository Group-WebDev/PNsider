const Post = require('../model/Post')

function analytics(category, number) {
    return new Promise((resolve, reject) => {
        //kulang og match para sa date, batch
        Post.aggregate([
            {
                $match:{
                    timestamp:{ $lt: new Date(), $gt:new Date(Date.now() - 12096e5)}
                }
            }, 
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
                    answers: 1,
                }
            },
        ])
            .then((data) => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function getLength(){
    return new Promise((resolve, reject) =>{
       // {$gt:filter.rangeDate, $lt:filter.date}
       //{date:{$gt:filter.rangeDate, $lt:filter.date}}
        Post.countDocuments().then(data => {
            resolve(data)
           })
           .catch(err =>{
             reject(err)
           })
    })
}

function getStudents(filter, projection){
    return new Promise((resolve, reject) =>{
        let date = new Date();
        console.log(test)
        let stmnt = {test:"bad"}
        Post.find(filter)
        .then( data =>{
            if(data){
                resolve(data)
            }
        })
        .catch(err =>{
            reject(err)
        })
    })
}


module.exports = {
    analytics,
    getLength,
    getStudents

}