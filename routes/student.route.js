const express = require('express');
const router = express.Router();
const Post = require(__dirname+'/../model/Post');
const mongoose = require('mongoose');


router.post('/answer', (req, res) =>{
    let studentID = mongoose.Types.ObjectId('5dea4b324197ba1c68cf269c')
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
     let studentID;
    Post.find({studentID: studentID})
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
})



module.exports = router