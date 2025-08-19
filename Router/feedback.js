const express = require("express");
const router = express.Router();
const Feedback = require("./../models/feedback");

router.post("/", async (req, res)=> {
    try{
         const data = req.body;
        const feedback = new Feedback(data);
         const response = await feedback.save();
        console.log("Feedback accept");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
})  

router.get("/", async (req, res) =>{
    try{
        const data = await Feedback.find();
        console.log("data Fetched");
        res.status(200).json(data);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});        
    }
});


module.exports = router;