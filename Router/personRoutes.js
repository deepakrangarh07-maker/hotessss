const express = require("express");
const router = express.Router();
const Person = require("./../models/person");


router.post("/", async (req, res) => {
    try {
        const data = req.body // assuring the request contains the person data

        //Create a new person document using the mongoose model : 
        const newPerson = new Person(data);

        //Save the new person the database  :
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server Error" });
    }
});

// GET method to get a person data : 
router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data Fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server Error" });
    }
});


router.get("/:work", async (req, res) => {

    try {
        const work = req.params.work;
        if (work == "chef" || work == "manager" || work == "waiter") {
            const response = await Person.find({ work: work });
             console.log("response fetched");
            res.status(200).json({ error: "invaild worl type" });
        }
        else {
            res.status(404).json({ error: "Invalid error type" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.put("./:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonDate = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonDate, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(400).json({ error: "person not Found " })
        }
        console.log("data updated");
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });

    }
})

// this line will add one that 

// this is new line of code 
// this is also a checker line 


module.exports = router;