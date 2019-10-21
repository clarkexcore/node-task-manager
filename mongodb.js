//CRUD Operations

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

const id = new ObjectID();
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect to Database");
    }

    const db = client.db(database)

    // db.collection('users').insertOne({
    //     name: "Alex",
    //     age: 29
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert user.");
    //     }

    //     console.log(result.ops);
    // });
    // db.collection('users').insertMany([
    //     {
    //         name: "Matty",
    //         age: 28
    //     }, {
    //         name: "Tnerb",
    //         age: 29
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert more users");
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         details: "Clean the car",
    //         completed: true
    //     }, {
    //         details: "Make sure that the Tours page is done on MRG Concerts",
    //         completed: false
    //     }, {
    //         details: "Go out to Vote",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert tasks into database");
    //     }

    //     console.log(result.ops);
    // })

})



