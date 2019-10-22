//CRUD Operations

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect to Database");
    }

    const db = client.db(database)

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5dae1d8591b8370dc3bd26c8")
    // }, {
    //     $inc: {
    //         age: 2
    //     }
    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // })

    // db.collection("users").deleteMany({
    //     age: 25
    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // })

    db.collection("tasks").deleteOne({
        details: "Clean the car"
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
})



