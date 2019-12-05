const Post = require('../model/Post')
function analytics(category,number) {
    return new Promise((resolve, reject) => {
        Post.aggregate([
            {
                $group: {
                    _id: `$categories.${category}.Q${number}`,
                    answers: {
                        $sum: 1
                    }
                }},
                {
                $project: {
                    _id: 1,
                    description: { $ifNull: ["Q" + number, "Unspecified"] },
                    answers:1
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


function add(data) {
    var items = [];
    items.push(data)
    return items;
}



module.exports = {
    analytics,
    add

}