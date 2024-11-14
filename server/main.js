const mongoose=require("mongoose");
const express =require("express");

mongoose.connect("mongodb+srv://sparsh2001:kJ7fYT9jFkvP3EXt@mongodb-learn.u0wfz.mongodb.net/fooddelivery?retryWrites=true&w=majority&appName=Mongodb-learn"
).then(()=>console.log("Connected sucessfully"))
.catch(err=>console.log(err));

const userdetails=new mongoose. Schema({
    userid:String,
    password:String,
    address: String
})
const details=mongoose.model("userdetails", userdetails);

const app =express();


app.get("/",function(req,res){
    res.send("Hello World") 
})

app.post("/createaccount",(req,res)=>{details.create({
    userid
})

})

app.listen(8000);