const express = require("express");
const user = express.Router();
const {user_model}=require("../models/user_model")
const bcrypt= require("bcrypt");
const jwt=require("jsonwebtoken");
user.use(express.json());
require("dotenv").config();
//  register part 
user.post("/register",async (req,res)=>{
   let payload = req.body;
   let {name,email,gender,password}=payload;
   bcrypt.hash(password,5,async (err,hash)=>{
    if (err){
        res.json("Problem in encrypting password")
    }
    else {
        await user_model.insertMany({name,email,gender,password:hash});
        res.json("User Added to DB")
    }
   })
   
})

//login part 
user.post("/login",async (req,res)=>{
    let payload = req.body;
    let {email,password}=payload;
    let data = await user_model.find({email});
    let pass=data[0].password;
    bcrypt.compare(password,pass,(err,result)=>{
        if (err){
            res.json("Wrong password");
        }
        else {
            let token = jwt.sign({id:data[0]._id},process.env.key,{expiresIn:"3h"});
            res.json({msg:"Login",token:token});
        }
    })
    
})

module.exports={user};