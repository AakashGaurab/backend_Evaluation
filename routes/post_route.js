const express= require("express");
const post = express.Router();
const {post_model}=require("../models/post_model");
require("dotenv").config();
post.use(express.json());

post.post("/post",async (req,res)=>{
    let payload=req.body;
    try {
        await post_model.insertMany([payload]);
        res.json("Post is posted");
    } catch (error) {
        res.json("Could not post ");
    }
    
})

post.get("/get",async(req,res)=>{
    let data = await post_model.find({});
    res.json(data);
})

post.patch("/update",(req,res)=>{
    res.send("from update");
})

post.delete("/delete",(req,res)=>{
    res.send("From delete");
})





module.exports={post};