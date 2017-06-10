//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server');
    db.collection('Todos').find({
        _id: new ObjectID('59399fda549d53db803b56fa'),
        completed: true
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch ToDos.');
    });


    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count ${count}`);
    }, (err) => {
        console.log('Unable to fetch ToDos.');
    });


    db.collection('Users').find({
        name: 'Anubhav Arora'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch user.');
    });
    //db.close();
});
