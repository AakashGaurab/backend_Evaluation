const mongoose = require("mongoose");

const post_schema = mongoose.Schema({
    title:String,
    body:String,
    device:String
})

const post_model= mongoose.model("post",post_schema);

module.exports={post_model}