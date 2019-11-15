const mongoose = require('mongoose')
const Schema = mongoose.Schema


var StaffSchema = new Schema({
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
    }
  
});

module.exports = mongoose.model('Staff', StaffSchema)