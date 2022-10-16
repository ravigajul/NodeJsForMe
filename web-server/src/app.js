const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//serving static html as the main page localhost:3000
app.use(express.static(path.join(__dirname,'../public')))
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

//setting up handle bars and views location to render dynamic pages
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title: "Weather",
        name: "Created by Ravi Gajul"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: "About Me",
        name: "Created by Ravi Gajul"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: "Help",
        name: "Created by Ravi Gajul"
    })
})

app.get('/weather', (req, res) => {
    res.send({ "location": "Hyderabad", "temperature": "26 degrees" })
})

app.get('/*',(req,res)=>{
    res.render('404',{
        code : '404',
        message: 'Page not found',
        name: "Created by Ravi Gajul"
    })
})

//opening  port on the server to listen
app.listen(3000, () => {
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:3000/help')
})
