const req = require("express/lib/request");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const bcrypt = require ("bcrypt");

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
    },
    username:{
        type:String,
        required:true
    },
    password:{
        required:true,
        type:String
    }
});
personSchema.pre("save" , async function (next){
    const person = this;
    if(!person.isModified("password"))return next();
    //Hash the password only if it has been modified (or is new);
    try{
        // hash password generation 
        const salt = await bcrypt.genSalt(10);

        //hash password
        const hashedpassword = await bcrypt.hash(person.password, salt);
        person.password = hashedpassword;
      next();  
    }
    catch(err){
        return next(err);
    }
})
personSchema.methods.comparePassword = async function(candidatePassword) {
    try{
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
            return isMatch;
    }
    catch(err){
        threw(err);
    }
}
// the compare funtion automatically extract the salt from the stored hashed password and use it to hash the entered password . it then compares the resulting hash with the stored hash . if they match  it indicated that the entered that the password is correct.


// prince ---> nndnnsdskfas
// login ----> deepakpassword

// nndnnsdskfas --> extract salt 
// salt + deepakpassword ----> hash ---> lkdjfasdsndf 

// campare the password nndnnsdskfas || lkdjfasdsndf
// if incorrect then login failed


const Person = mongoose.model("Person", personSchema);
module.exports = Person;    
