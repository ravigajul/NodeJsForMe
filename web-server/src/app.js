const path = require('path')
const express = require('express')

const app = express()

//serving static html as the main page localhost:3000
app.use(express.static(path.join(__dirname,'../public')))
const viewsPath = path.join(__dirname,"../templates")

//setting up handle bars and views location to render dynamic pages
app.set('view engine','hbs')
app.set('views',viewsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title: "This is from hbs file",
        para: "This is a paragraph"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: "This is ravi gajul again from hbs file",
        para: "This is a paragraph again from  hbs file"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: "I'm reachable at +91-905-2046524 from hbs file"
    })
})

app.get('/weather', (req, res) => {
    res.send({ "location": "Hyderabad", "temperature": "26 degrees" })
})

//opening  port on the server to listen
app.listen(3000, () => {
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:3000/help')
})
