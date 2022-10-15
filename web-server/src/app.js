const path = require('path')
const express = require('express')

const app = express()

//serving static html as the main page localhost:3000
app.use(express.static(path.join(__dirname,'../public')))

app.get('/weather', (req, res) => {
    res.send({ "location": "Hyderabad", "temperature": "26 degrees" })
})
//opening  port on the server to listen
app.listen(3000, () => {
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:3000/help')
})
