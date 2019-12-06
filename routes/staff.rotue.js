
//est
const express = require('express');
const router = express.Router();
const Student = require('../model/Student');
const Staff = require('../model/admin')
const Post = require('../model/Post')
const studentController = require('../modules/Student')
const query = require('../modules/analytics')



router.post('/student/create', (req, res) => {
    let student = new Student(req.body);
    student.save()
        .then(() => {
            res.status(200).json({ message: 'successfull' })
        })
        .catch((err) => {
            res.status(400).json({ err: err.message })
        })
});

router.get('/students', (req, res) =>{
    let filter = {deletedAt:null}
    studentController.retrieveAllUser(filter)
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
        

})

router.post('/student/delete/:id', (req, res) =>{
    let options = {
      deletedAt: new Date()
    }
    Student.findByIdAndUpdate(req.params.id, options, {new: true})
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
})

//NOTE:::::: new user info to be placed in the database
router.post('/student/update/:id', (req, res) =>{
    let options = {
      editedAt: new Date(),
    }
    Student.findByIdAndUpdate(req.params.id, options,{new: true})
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
})


router.get('/report/summary/:number/students',(req, res) =>{


    // Post.find({_id:'5dea4ff05f71070f74be1409',"categories.academicLife.Q6":"good"} )
    //     .then( data =>{
    //         if(data){
    //             res.send(data)
    //         }
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //         res.send(err)
    //     })
  async function getListStudentsInfo(){
      try{
        let filter = { questionNumber : 6, value :"good" }
        let user = await  query.getStudents(filter);
        console.log(user)
        res.send(user)
      }
      catch(err){
        res.status(400).send(err)
      }
  }
  getListStudentsInfo();


})


router.post('/report/summary/:number', async (req, res) => {
    let number = req.params.number
    let length = await query.getLength();
    if(req.params.number > 5){
        query.analytics('academicLife', number)
        .then(data =>{
         res.json({data:data, length:length})
        })
        .catch(err =>{
            res.send(err)
        })
        
    }else{
        query.analytics('centerLife', number)
        .then(data =>{
            res.json({data:data, length:length})
        })
        .catch(err =>{
            res.send(err)
        })
    }
   


})

//after update password is not hashed anymore
//all fields must have value otherwise it will become null



// router.get('/twoWeeksAnswer', (req, res) => {
//     const date = new Date();
//     console.log(new Date(date));
//     let rangeDate = date.setHours(-336, 00, 00);
//     console.log(new Date(rangeDate))
//     Post.find({ date: { $gt: new Date(Date.now() + 12096e5), $lt: date } })
//         .then(doc => {
//             res.status(200).json({ number: doc.length })
//             console.log(doc)
//         })
//         .catch(err => {
//             res.status(500).json({ message: err.message })
//         })
// })

// router.post('/createadmin',(req, res) =>{
//     let student = new Staff(req.body);
//     student.save()
//         .then(() => {
//             res.status(200).json({ message: 'successfull' })
//         })
//         .catch((err) => {
//             res.status(400).json({ err: err.message })
//         })
// })


module.exports = router;