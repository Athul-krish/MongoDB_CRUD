const mongoose = require('mongoose');

//schema creation
const studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    place:String
})

const studentModel = mongoose.model('Student',studentSchema);

module.exports = studentModel;