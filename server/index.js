var bodyParser = require("body-parser");
var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var cors = require('cors')
//var bcrypt = require('bcrypt');
var addStudent = require("./model/student");

app.use(cors());

mongoose.connect('mongodb://localhost:27017/students', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected")
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
  }));

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/index.html")
// })

app.use(express.static("public"));

app.post('/student/create', function (req, res) {
    // bcrypt.hash(req.body.password, 10, function (err, hash) {
    //     var hashed = hash;
    // });
    // console.log(hashed);
    let test = async function () {
        const exist = await addStudent.getByUsername(req.body.username);
        if (exist == null) {
          let data = {
            fullname:req.body.fullname,
            batch:req.body.batch,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          }
          await addStudent.addStudent(data);
          let item = await addStudent.getLastStudent();
          res.send(item)
    
        } else {
          res.json({
            message: 'Username already exist!'
          })
        }
      }
      test();
})

app.get('/', function (req, res) {
    addStudent.find({},function (err, data) {
        res.json({ data: data });
        //console.log(data[0].timestamp)
    })
})

http.listen(port, function () {
    console.log('listening on *:' + port);
});