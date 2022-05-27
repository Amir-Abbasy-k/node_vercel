const express = require("express");

const app = express();

app.set('view engine', 'ejs');



app.get('/',(req, res)=>{
    // res.send({msg: "It's working well"})
    res.render('pages/index');
})


app.listen(4000, (err, result)=>{
    if(err)console.log("Err "+err);
    console.log("Server Started on 4000");
})