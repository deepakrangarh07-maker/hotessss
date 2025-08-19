const mongoose = require("mongoose");

const menuItemSchema  = new mongoose.Schema({

    name: {
        type: String,
        required:true
    },
    price:{
        type: Number,
        defualt:2000,
        required:true
    },
    taste:{
        type: String,
        enum:["sweet",'sour','spicy'],
        required:true
    },
    is_drink:{
        type: Boolean,
        default:false
    },
     ingredient:{
        type: String,
        defualt:[]
    },
     num_sales:{
        type: Number,
        default:0
    },
})
const menu = mongoose.model("menulink",menuItemSchema);
module.exports = menu;