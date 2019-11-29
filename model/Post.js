const mongoose = require('mongoose')
const Schema = mongoose.Schema

var PostSchema = new Schema({
    studentID: {
        type: Object,
        required: true
    },
    categories:{
        academicLife: {
            type:Object
        },
        centerLife: {
            type: Object 
        }
    },
    timestamp:{
        type: Date,
        default: new Date()
    }
    
});
module.exports = mongoose.model('Post', PostSchema)