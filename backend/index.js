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

mongoose.connect(config.connectionString)
.then(()=>console.log("MongoDb connected"))
.catch((err)=>console.error("MongoDB error",err));


const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./utilities");
const User = require("./models/user.model")
const Note = require("./models/note.model");



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

    const accessToken = jwt.sign({_id: user._id, email: user.email},process.env.JWT_SECRET,{expiresIn:"36000m"});

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
        const accessToken = jwt.sign({ _id: userInfo._id, email: userInfo.email},process.env.JWT_SECRET,{expiresIn:"36000m"});

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



app.post('/add-note',authenticateToken,async (req,res)=>{

    const {title, content, tags} = req.body;
    const user = req.user;

    if(!title) return res.status(400).json({error:true, message:"title is required"});

    if(!content) return res.status(400).json({error:true, message:"content is required"});

    try{
        const note = new Note({
            title,
            content,
            tags: tags || [],
            userId: user._id,
        });

        await note.save();

        return res.json({
            error:false,
            note,
            message:"Note Added Successfully",
        });

    }

    catch(error){
        console.log("error note",error)
        return res.status(500).json({error:true, message:error.message});
    }
})



app.post('/edit-note/:noteId',authenticateToken,async (req,res)=>{

    const noteId  = req.params.noteId;
    const {title, content, tags, isPinned} = req.body;
    const user = req.user;

    if(!title && !conten && !tags){
        return res.status(400).json({error:true, message:"no changes provided"})
    }

    try{
        const note = await Note.findOne({_id:noteId, userId:user._id})

        if(!note) return res.status(400).json({error:true, message:"note not found"});

        if(title) note.title = title;
        if(content) note.content = content;
        if(tags) note.tags = tags;
        if(isPinned) note.isPinned = isPinned;

        await note.save();

        return res.json({
            error:false,
            note,
            message:"Note updated successfully"
        })

    }


    catch(error){
        console.log(error)
        return res.status(500)
        .json({error:true,
            message:"internal server error"
        })
    }

})






app.listen(3000,()=>{
    console.log("server is running");
})