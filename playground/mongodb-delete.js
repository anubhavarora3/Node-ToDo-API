//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server');
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Food'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Food'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete --> similar to pop
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Anubhav Arora'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('593999341c8b5b10fbfc5da3')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });


    //db.close();
});
