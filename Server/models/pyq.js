const mongoose = require('mongoose');
const pyqSchema = new mongoose.Schema({
    Midsem: {
        type: String,
        required: true
    },
    Endsem: {
        type: String,
        required: true
    },
    Study_material: {
        type: String,
        required: true
    },
    subject:{
        type: Number,
        required: true
    }

});
const pyqsSchema = mongoose.model('PYQs', pyqSchema);
module.exports = pyqsSchema;