require('dotenv').config({path:"./.env"});
const express=require("express");
const path=require("path");
const cors=require("cors");

const connectDatabase=require("./Database/index");
const UsersRouter=require("./Routers/UsersRouter");
const JobsRouter = require('./Routers/JobsRouter');
const app=express();
app.use(cors());
app.use(express.json());


app.use(UsersRouter);
app.use(JobsRouter);
const  PORT=process.env.PORT || 8080;
app.get("/",(req,res,next) =>{
    res.json("server start")
}) 

connectDatabase()
.then(()=>
{
    app.listen(PORT,()=>
    {
        console.log("Server connected successfully to", PORT)
    })
})