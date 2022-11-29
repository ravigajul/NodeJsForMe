const mongoose = require('mongoose');
var validator = require('validator');

//mongoose model is a class with defined properties and methods
const User = mongoose.model('User',{
    name: {
        type: String,
        trim: true,
        required: true
    },
    password:{
        type: String,
        trim: true,
        required: true,
        minLength: [7, 'Must be at least 6, got {VALUE}'],
        validate(value){
            if(validator.contains(value,'password',{ ignoreCase: true, minOccurrences: 1 })){
                throw new Error('Invalid password')
            }
        }
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value){
            //node module validator
           if(!validator.isEmail(value)){
                throw new Error(value + " is not a valid email address")
           }    
        }
        
    },
    age: {
        type: Number,
        default: 0,
        required: true,
        validate(value){
            //user defined validator
            if(value<0){
                throw new Error("Age cannot be less than zero")
            }
        }
    }
})

module.exports = User