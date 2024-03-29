const mongoose = require('mongoose');
var validator = require('validator');

const Task = mongoose.model('Task',{
    description:{
        type: String,
        trim: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false

    }
})

module.exports = Task