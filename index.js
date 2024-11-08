const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.json({
        message: "Node js server using express inside docker"
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})






