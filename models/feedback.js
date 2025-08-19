// const feedbackcustomer = new moongose.Schema({
//     isgood: {
//         type : Boolean,
//         required : true
//     },
//     anyImprovement:{
//         type: String,
//         default:false
//     },
//     service:{
//         type: Boolean,
//         default : false
//     },
//     tip:{
//         type : Number,
//         default: 0  
//     },
//     particular :{
//         type : "String",
//         enum : ['suresh', 'rohit',',manoj']
//     }
//     // {
//     //     "isgood" : true,
//     //     "anyImprovement" : "This is for good",
//     //     "service" : "true",
//     //     "tip" : 510,
//     //     "particular" : "suresh"
//     // }

// });

// const Feedback = moongose.model("Feedback",feedbackcustomer);
// module.exports = Feedback;
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String },
  isgood: { type: Boolean, required: true }  // 👈 required field
});

module.exports = mongoose.model("Feedback", feedbackSchema);