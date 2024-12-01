// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;





const mongoose = require("mongoose");



let database;
async function getDatabase(){
    // const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    // database = client.db('library');
    // if (!database) {
    // console.log('Database not connected');
    // }
    // return database;
    // 
    // mongoose.connect('mongodb+srv://dhineshrk77:yKOhSpuTERjLX84f@dhinesh.og7hxlf.mongodb.net/?retryWrites=true&w=majority&appName=Dhinesh')
    mongoose.connect('mongodb://127.0.0.1:27017')
    .then( ()=>{
        console.log("Database Connected");
    }).catch( ()=>{
        console.log("Database not Connected");
    })

}




module.exports = {
    getDatabase
    // ObjectID
}
