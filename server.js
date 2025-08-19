const express = require("express");
const app = express();
const db = require("./db");
const bodyParser =  require("body-parser");



app.use(bodyParser.json());  

app.get("/", (req, res) =>{
    res.send("hello world is printing")
}); 




const personRoutes = require("./Router/personRoutes");
app.use("/person" ,personRoutes);

const feedbackRoutes = require("./Router/feedback");
app.use("/feedback", feedbackRoutes);


const menuRoutes = require("./Router/menuRouter");
app.use("/menu", menuRoutes);

// 
app.listen(3000, ()=>{
    console.log("server is listening")
});
 