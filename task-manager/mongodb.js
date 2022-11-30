//CRUD Create, Read, Update, Delete

const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = "mongodb://127.0.0.1:27017/"
const databaseName = "task-manager"

const id = new ObjectId
//12 byte binary buffer
console.log(id.id)
//24 character string representaton 
console.log(id.toHexString())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to DB")
    }
    console.log("Connected Successfully!")
    const db = client.db(databaseName)

    // //Inserting a document
    // db.collection('users').insertOne(
    //     {
    //         name: "Ravi",
    //         age: 37
    //     })

    // //Querying the document using id
    // db.collection('users').findOne({ _id: new ObjectId("6386bc8786ea64fef3d6e0fd") }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch data')
    //     }
    //     console.log(user)
    // })

    // //Querying the document using name and age
    // db.collection('users').findOne({ name: 'Ravi', age: 37 }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch data')
    //     }
    //     console.log(user)
    // })


    // //Querying the document using name
    // db.collection('users').findOne({ name: 'Ravi' }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch data')
    //     }
    //     console.log(user)
    // })

    //Querying multiple documents. This returns a cursor unlike find one
    db.collection('users').find({ age: 37 }).toArray((error,users)=>{
        console.log(users)
    })

    //count of rows. Cursor has many methods that we can explore in documentation
    db.collection('users').find({ age: 37 }).count((error,count)=>{
        console.log(count)
    })
    

})