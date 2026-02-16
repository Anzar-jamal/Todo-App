const express = require("express");
const app = express();
app.use(express.json())
const cors = require("cors")

app.use(cors({
    origin:"*",
}));
require("dotenv").config();
const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);
const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./utilities");
const User = require("./models/user.model")



app.get('/',(req,res)=>{
    res.json({data:"Hello bro ! i am from backend 🤗"})
});


app.post('/create-account',async (req,res)=>{

    const {fullName,email,password} = req.body;

    if(!fullName) {
        return res
        .status(400)
        .json({error:true,message:"Full name is required"})

    }

    if(!email){
        return res
        .status(400)
        .json({error:true,message:"email required"})
    }

    if(!password){
        return res
        .status(400)
        .json({error:true,message:"password required"})
    }

    const isUSer = await User.findOne({email:email});

    if(isUSer){
        return res.json({
            error:true,
            message:"user already exist"
        })
    }

    const user = new User({
        fullName,
        email,
        password
    })

    await user.save();

    const accessToken = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"36000m"});

    return res.json({
        error:false,
        user,
        accessToken,
        message:"Regestration Successful"
    })


});


app.post('/login',async (req,res)=>{
    const {email,password} = req.body;

    if(!email) return res.status(400).json({message:"email is required"})

    if(!password) return res.status(400).json({message:"password required"})
        
    const userInfo = await User.findOne({email})
    
    if(!userInfo) return res.status(400).json({message:"user not found"})
    
    if(userInfo.email == email && userInfo.password==password){
        const user = {user:userInfo};
        const accessToken = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"36000m"});

        return res.json({
            error:false,
            message:"login successful",
            email,
            accessToken
        })
    }     

    else{
        return res.json({
            error:true,
            message:"invalid credentials"
        })
    }
})



app.listen(3000,()=>{
    console.log("server is running");
})