const express = require("express");

const app = express();

app.set('view engine', 'ejs');

var port =  process.env.PORT || 4000
 

app.get('/',(req, res)=>{
    // res.send({msg: "It's working well"})
    res.render('pages/index');
})


app.listen(port, (err, result)=>{
    if(err)console.log("Err "+err);
    console.log("Server Started on 4000");
})