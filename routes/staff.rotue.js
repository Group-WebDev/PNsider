const express = require('express');
const router = express.Router();
const Student = require('../model/Student');
const Post = require('../model/Post')

router.post('/create',(req, res) =>{
    let student = new Student(req.body);
    student.save()
    .then(() =>{
       res.status(200).json({message: 'successfull'})
    })
    .catch((err) =>{
        res.status(400).json({err:err.message})
    })
});

router.post('/summary',(req, res) =>{

    Post.find({timestamp:'2019-11-15' },{_id:0, studentID:0})
    .then((doc) =>{
        console.log(doc);
        res.status(200).json({data:doc});
    })
    .catch(err =>{
        console.log(err);
        res.status(400).json({err:err});
    })
})

module.exports = router;