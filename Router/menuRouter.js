const express = require("express");
const router = express.Router();
const menu = require("./../models/menulink");//


// POST method save the menu data :
router.post("/",async (req,res)=>{
    try{
        const data = req.body;
        const newmenu =  new menu(data);
        const response = await newmenu.save();
        console.log("menu saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server Error"});
    }
})

// GET Method for get a menu data: 
router.get("/",async (req,res) => {
    try{
        const data = await menu.find();
        console.log("Data Fetched");
        res.status(200).json(data);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server Error"});
    }
})

router.post("/:tasteType" , async (req, res) =>{
        const tasteType = req.params.tasteType;
       try{
         if(tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy"){
            const response = await menu.find({taste: "tastetype"});
            console.log("data fetched");
            res.status(200).json({error : " Invalid taste type"})
        }
        else{
        res.status(404).json({error : "Invalid error type"});
        }
       }
        catch(err){
         console.log(err);
        res.status(500).json({error : "Internal Server Error"}); 
    }      
})


module.exports = router;
"sweet",'sour','spicy'