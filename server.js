const express = require("express");
const app = express();
const db = require("./db");
const bodyParser =  require("body-parser");
require("dotenv").config();
const passport = require("./auth");

// 
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());  



// middleware function 
const logRequest = (req, res, next) =>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); //Move on the next phase : 
;}
app.use(logRequest); 
// Aunthentication ans authorization 
// Login and Signup 
app.use(passport.initialize());
const authPassword = passport.authenticate("local",{session: false})
app.get("/",(req, res) =>{
    res.send("hello world is printing")
}); 

// hello world



const personRoutes = require("./Router/personRoutes");
app.use("/person" ,authPassword,personRoutes);

const feedbackRoutes = require("./Router/feedback");
app.use("/feedback", feedbackRoutes);


const menuRoutes = require("./Router/menuRouter");
app.use("/menu", menuRoutes);


app.listen(PORT, ()=>{
    console.log("server is listening")
});
 


