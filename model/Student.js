const mongoose = require('mongoose')
const Schema = mongoose.Schema


var StudentSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now(),
        required: true
    }
  
});

module.exports = mongoose.model('Student', StudentSchema)