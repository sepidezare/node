const express=require("express");

const app=new express();

app.listen(3001,()=>{

    console.log("server rnning")
});

app.get("/",(req,res)=>{

   res.send("hello my app");
});