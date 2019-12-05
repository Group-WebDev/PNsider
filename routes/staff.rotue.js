
//est
const express = require('express');
const router = express.Router();
const Student = require('../model/Student');
const Post = require('../model/Post')
const mongoose = require('mongoose')

router.post('/create', (req, res) => {
    let student = new Student(req.body);
    student.save()
        .then(() => {
            res.status(200).json({ message: 'successfull' })
        })
        .catch((err) => {
            res.status(400).json({ err: err.message })
        })
});

router.post('/summary', (req, res) => {

    Post.aggregate([
        {
            $match:{
                '_id': mongoose.Types.ObjectId('5de0cb793d15e42a3843795f')
            }
        },
        {
            $group:{
                _id:"$categories.academicLife.Q1",
                answers:{
                    $sum:1
                }
            }
        }
    ])
    .then(doc =>{
        console.log(doc)
        res.end()
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
    // Post.aggregate( [
    //     { $match : {  'categories.academicLife.Q1' : "good"} },
    //     { $group: { _id: "$categories.academicLife.Q1", goodcount: { $sum: 1 } } }
    //     ] )
    //     .then(doc =>{
    //         console.log(doc)
    //         res.end()
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //         res.send(err)
    //     })
    //     .finally(
    //         res.end()
        // )
    // Post.aggregate([
    //     { $match: { '_id': "5de0cb5d3d15e42a3843795e" }},
    //     {
    //                 "$group": { _id: "$categories.academicLife", count: { $sum: 1 } }
    //     },
    //     {
    //         $project: {
    //         _id: 1,
    //         description: { $ifNull: [ "Q", "Unspecified" ] },
    //         count:1
    //         }
    //     }
    // //    {
    // //     $match: {
    // //         "timestamp": {$lte:'2019-11-29'}
    // //     }
    // //    },
    // //     {
    // //         "$group": { _id: "$categories.academicLife.Q"+i, count: { $sum: 1 } }
    // //     },
    // //     {
    // //         $project: {
    // //            _id: 1,
    // //            description: { $ifNull: [ "Q"+i, "Unspecified" ] },
    // //            count:1
    // //         }
    // //      }
    // ])
    //     .then(doc => {
    //         console.log(doc)
    //         res.end()
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.send(err)
    //     })
    //     .finally(
    //         res.end()
    //     )

        
})


router.post('/test', (req, res) => {
    Post.countDocuments({ timestamp: '2019-11-15' })
        .then(count => {
            console.log(count)
            res.json({ data: count })
            //and do one super neat trick
        })
        .catch(err => {
            res.status(500).send(err)
            //handle possible errors
        })
})


module.exports = router;