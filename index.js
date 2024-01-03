const express= require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/mycompany").then(()=>{console.log("connection successfull")})

const myschema =new mongoose.Schema({
    name:"String",
    email:"String",
    password:"String"
},{timestamps:true})
const mymodel = mongoose.model("Employee", myschema);
app.post("/finddata",(req, res)=>{
    mymodel.find(req.body).then((data)=>res.send(data))
})

app.post("/insert",(req, res)=>{
    const userdata = new mymodel(req.body);
    
    mymodel.find({email:userdata.email}).then((data)=>{res.send(data)});
})
app.post ("/insertuserdata" , (req, res)=>{
    const userdata = new mymodel(req.body);
    userdata.save().then(()=>{console.log("data insert")});
})


app.listen(4000);