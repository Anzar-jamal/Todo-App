const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors({
    origin:"*",
}));


app.get('/',(req,res)=>{
    res.json({data:"Hello bro ! i am from backend 🤗"})
});


app.listen(3000,()=>{
    console.log("server is running");
})