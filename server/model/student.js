const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    fullname: {type:String},
    batch: {type:String},
    username: {type:String,  unique:true},
    email: {type: String},
    password: {type: String}
 });

 Schema.statics.addStudent = async function (student){
    var Student = new this(student);
    var result =  await Student.save(student);
    console.log(result);
    return result;
 }
 
 Schema.statics.getLastStudent = async function() {
    return await this.findOne().sort({_id:-1}).limit(1);
 }
 
 Schema.statics.getByUsername = async function(username) {
    return await this.findOne({"username" : username});
 }

 module.exports = mongoose.model('Student', Schema);