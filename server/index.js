var bodyParser = require("body-parser");
var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 5000;
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');
var addStudent = require("./model/student");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.use(express.static("public"));

app.post('/student/create', function (req, res) {
    // bcrypt.hash(req.body.password, 10, function (err, hash) {
    //     var hashed = hash;
    // });
    // console.log(hashed);
    var student = new addStudent(req.body)
    student.save(function (err, info) {
        if (err) return res.json(err);
        addStudent.find({ name: info.name }, function (err, data) {
            if (err) {
                console.log("ERR: " + err)
            } else {
                console.log(data)
                res.json(data)
            }
        })
    });
})

app.get('/student/retrieve/all', function (req, res) {
    addStudent.find(function (err, data) {
        res.json({ data: data });
        //console.log(data[0].timestamp)
    })
})

http.listen(port, function () {
    console.log('listening on *:' + port);
});