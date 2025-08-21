const mongoose  = require("mongoose");
require("dotenv").config();
//Define the MongoDb connection URL : 
//  mongoURl = "mongodb://localhost:27017/hotels"; //Replace "mydatabase" with your database name :

// online mongo 
const mongoURl = process.env.DBV_URL;

//Set up MongoDB  Connection : 
mongoose.connect(mongoURl,{
    // useNewUrlParser : true,
    // useUnifiedTopology : true
})

//get the default connection 
//Mongoose maintains a default connection object represting the mongoDB connection 

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected to mongoDB server");
});

db.on("error",()=>{
    console.log("MongoDB Connection error");
});

db.on("disconnected",()=>{
    console.log("MongoDB Disconnected");
});

//Exports a databases connection 
module.exports = db;
