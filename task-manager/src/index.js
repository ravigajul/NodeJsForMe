const express = require('express');
const User = require('./models/user');
const Task = require('./models/task')
const app = express()
require('./db/mongoose')
const port = process.env.PORT || 3000

//to automatically parse the request body and make it available in req.
app.use(express.json())

app.post('/users', (req, res) => {

    //req.body is the request body parsed automatically by line 9
    const user = new User(req.body)
    user.save().then((data) => {
        res.status(201)
        res.send(data)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.get('/users', (req, res) => {

    //querying all users
    User.find().then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//:id is the dynamic id param that users pass when requesting
app.get('/users/:id',(req,res)=>{
    console.log(req.params)

    //mongoose will auto typecast string to object
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }).catch((e)=>{
        console.log(e)
        console.log(e.name)
        if(e.name==="CastError"){
            res.status(404).send(e)
        }
            res.status(500).send(e)
        
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then((data) => {

        //combinig status and send
        res.status(201).send(data)
    }).catch((e) => {

        //combinig status and send
        res.status(400).send(e)
    })
})

app.get('/tasks',(req,res)=>{
    Task.find().then((tasks)=>{
        if(!tasks){
            res.status(400).send()
        }
        res.send(tasks)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

app.get('/tasks/:id',(req,res)=>{
    const _id = req.params.id
    Task.findById(_id).then((task)=>{
        if(!task){
           return  res.status(404).send()
        }
        res.send(task)
    }).catch((e)=>{
        if(e.name==="CastError"){
            res.status(404).send(e)
        }
        res.status(500).send(e)
    })
})


app.listen(port, () => {
    console.log('server is up on port ' + port);
})