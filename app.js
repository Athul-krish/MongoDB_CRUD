const express = require('express');
const morgan = require('morgan');
const db = require('./mongodb');
const studentRoute = require('./Routes/StudentRoute');

const app =new express();
app.use(morgan('dev'));
app.use('/api',studentRoute);

app.listen(5000,(req,res)=>{
    console.log("Listening to port 5000");
})