const mongoose = require('mongoose')
// const validator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/pnStudent', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected To DB")
});

var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    }
})

//studentSchema.plugin(validator, { message: 'Item must be unique!' });

module.exports = mongoose.model('Student', studentSchema);