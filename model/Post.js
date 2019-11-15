const mongoose = require('mongoose')
const Schema = mongoose.Schema


var PostSchema = new Schema({
    studentID: {
        type: String,
        required: true
    },
    answers:{
        Q1:{
            type: String
        },
        Q2:{
            type: String
        }
    },
    timestamp:{
        type: Date,
        default: new Date()
    }
    
});
module.exports = mongoose.model('Post', PostSchema)