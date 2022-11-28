const mongoose = require('mongoose');
var validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');


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

// //instantiating the class defined above
// const me = new User({
//     name: 'Rajesh ',
//     email: "test@TEST.com",
//     password: 'passw0rd',
//     age: 37
   
// })


// //.save returns a promise
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error:', error)
// })

const Tasks = mongoose.model('Tasks',{
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

const todo = new Tasks({
    description: 'Complete Nodejs',
    completed: true
})

todo.save().then(()=>{
    console.log(todo)
}).catch((error)=>{
    console.log(error)
})