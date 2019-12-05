const express = require('express');
const router = express.Router();
const Post = require(__dirname+'/../model/Post');
const mongoose = require('mongoose');


router.post('/answer', (req, res) =>{
    let studentID = mongoose.Types.ObjectId('5dce4e9f4ed64817c8a05e43')
    let data = {
        studentID: studentID,
        categories:{
            academicLife:req.body.academicLife,
            centerLife: req.body.centerLife
        }
    };
    let post = new Post(data);
    post.save()
    .then(() =>{
        res.status(200).json({message: 'Successfully saved'});
    })
    .catch( err =>{
        res.status(400).json({err:err.message});
        
    });
    
});

router.get('/previuosAnswers', (req, res) => {
   // const date = new Date();
    //.log(new Date(date));
    //let rangeDate = date.setHours(-336, 00, 00);
    //console.log(new Date(rangeDate))
    Post.find({ date: { $gt: rangeDate, $lt: date } })
        .then(doc => {
            res.status(200).json({ number: doc.length })
            console.log(doc)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})


module.exports = router