const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT ||8081;
const userRoute = require('./routes/student.route');
const staffRotue = require('./routes/staff.rotue');
const DB = require('./connectDB')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

DB.connect()

app.get('/',(req,res) =>{
    console.log('hello world')
});

app.use('/student',userRoute)

app.use('/staff', staffRotue)

app.listen(port, (err) => {
    console.log(`listening to ${port}`)
})