const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use("/",(req,res)=>{
    res.json({
        message: "Node js server using express inside docker"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port 3000");
})















