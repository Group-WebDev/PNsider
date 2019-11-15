const express = require('express');
const router = express.Router();
const Student = require('../model/Student');
const Post = require('../model/Post')

router.post('/login',(req, res) =>{
    Student.findOne({username: req.body.username, password: req.body.password})
    .then(doc =>{
      if(doc){
        console.log(doc);
        res.status(200).json({data:doc});
      }else{
          res.status(404).json({message: 'Account not found'})
      }
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({err: err.message})
    })
});

router.post('/answer', (req, res) =>{
    let data = {
        studentID: '5dce4e9f4ed64817c8a05e43',
        answers: req.body
    };
    let post = new Post(data);
    post.save()
    .then(() =>{
        res.status(200).json({message: 'Successfully saved'});
        console.log('saved');
    })
    .catch( err =>{
        res.status(400).json({err:err.message});
        console.log(err.message);
    });
    
});


module.exports = router