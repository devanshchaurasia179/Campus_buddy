const mongoose = require('mongoose');
const infoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll_no: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        maxlength: 50,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true 
    },
        contact:{
        type: String,
        required: true
    }

});
const studentSchema = mongoose.model('ICE', infoSchema, 'ICE');
module.exports = studentSchema;