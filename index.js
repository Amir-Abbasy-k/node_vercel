const express = require("express");

const app = express();



app.get('/',(req, res)=>{
    res.send({msg: "It's working well"})
})


app.listen(4000, (err, result)=>{
    if(err)console.log("Err "+err);
    console.log("Server Started on 4000");
})