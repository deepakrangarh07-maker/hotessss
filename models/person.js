const req = require("express/lib/request");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required: true
    }
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;    
