const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = "mongodb://127.0.0.1:27017/"
const databaseName = "task-manager"

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log("unable to connect to DB")
    } else {
        console.log("Connected Successfully!")
        const db = client.db(databaseName)
        db.collection('user').insertOne(
            { 
                name: "Ravi",
                age: 37 
            })
    }
})