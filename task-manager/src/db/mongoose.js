const mongoose = require('mongoose');
var validator = require('validator');


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');


//mongoose model is a class with defined properties and methods
const User = mongoose.model('User',{
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
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
        required: true,
        validate(value){
            //user defined validator
            if(value<0){
                throw new Error("Age cannot be less than zero")
            }
        }
    }
})

//instantiating the class defined above
const me = new User({
    name: 'Rajesh',
    email: "test@test.com",
    age: 37
   
})


//.save returns a promise
me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error:', error)
})

// const Tasks = mongoose.model('Tasks',{
//     description:{
//         type: String
//     },
//     completed:{
//         type: Boolean
//     }
// })

// const todo = new Tasks({
//     description: 'Complete Nodejs',
//     completed: false
// })

// todo.save().then(()=>{
//     console.log(todo)
// }).catch((error)=>{
//     console.log(error)
// })