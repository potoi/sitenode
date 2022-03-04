const express = require('express');
const app= express();
const fs = require ('fs');
app.get('/',(re,res)=>{


  fs.readFile('home.html','utf-8',(err,data)=>{

    if(err){
      console.log(err)
      return
    }
    console.log(data)
    res.send(data);

  })


});



app.listen(process.env.PORT || 3000,() => console.log("https//localhost:3000"));
