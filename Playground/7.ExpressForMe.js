const path = require('path')
const express = require('express')

const app = express()

//serving static html as the main page localhost:3000
app.use(express.static(path.join(__dirname,'../public')))

//invoking just the domain. This can be removed if using above static page
app.get('', (req, res) => {
    res.send("<h1>Hi There!!</h1>")
})

//invoking a resource
app.get('/help', (req, res) => {
    res.send({
        "name": "Ravi",
        "Email": "Ravi.Gajul@icloud.com",
        "Phone": "+91-905-204-6524"
    })
})

//invoking another resource
app.get('/about', (req, res) => {
    res.send([{
        "name": "Ravi",
        "Email": "Ravi.Gajul@icloud.com",
        "Phone": "+91-905-204-6524"
    }, {
        "name": "Shirish",
        "Email": "Shirish.Gajul@icloud.com",
        "Phone": "+1-404-421-6994"
    }])
})

app.get('/weather', (req, res) => {
    res.send({ "location": "Hyderabad", "temperature": "26 degrees" })
})
//opening  port on the server to listen
app.listen(3000, () => {
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:3000/help')
})
