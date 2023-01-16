const express = require("express");
const app = express();
require("dotenv").config();
const {connect}=require("./config/db");
const {user}=require("./routes/user_route")
const {post}=require("./routes/post_route");
const {authorize}=require("./middleware/jwt__verification");
const cors = require("cors");

app.use(cors({origin:"*"}));
app.use("/user",user)


app.use("/post",authorize,post);
app.listen(process.env.port,async ()=>{
    try {
        await connect;
    } catch (error) {
        console.log("Error Connecting to DB")
    }
    console.log(`Server running at http://localhost:${process.env.port}`);
})