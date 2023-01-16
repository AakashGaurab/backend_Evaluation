const mongoose = require("mongoose");

const user_schema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})

const user_model=mongoose.model("user",user_schema);

module.exports={user_model};