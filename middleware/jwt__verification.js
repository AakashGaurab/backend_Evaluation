const jwt = require("jsonwebtoken");
const express = require("express");
let authorize=(req,res,next)=>{
    let token = req.headers.token;
    jwt.verify(token,process.env.key,(err,result)=>{
        if (err){
            res.json("Wrong Credentials");
        }
        else {
            next();
        }
    })
}

module.exports={authorize};