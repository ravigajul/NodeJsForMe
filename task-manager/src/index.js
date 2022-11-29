const express = require('express');
const User = require('./models/user');
const Task = require('./models/task')
const app  = express()
require('./db/mongoose')
const port = process.env.PORT || 3000

//to automatically parse the request body and make it available in req.
app.use(express.json())

app.post('/users',(req,res)=>{

    //req.body is the request body parsed automatically by line 9
    const user = new User(req.body)
    user.save().then((data)=>{
        res.status(201)
        res.send(data)
    }).catch((e)=>{
        res.status(400)
        res.send(e)
    })
})

app.post('/tasks',(req,res)=>{
    const task = new Task(req.body)
    task.save().then((data)=>{
        
        //combinig status and send
        res.status(201).send(data)
    }).catch((e)=>{

        //combinig status and send
        res.status(400).send(e)
    })
})


app.listen(port,()=>{
    console.log('server is up on port ' + port);
})