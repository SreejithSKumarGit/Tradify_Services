const mongoose=require("mongoose");

const jobsSchema=new mongoose.Schema({
    title:String,
    company:String,
    location:String,
    description:String,
    time_stamp:Date,
    no_of_checks:Number,
    applicants:[{
        name:String,
        email:String,
        experience:Number,
        ctc:Number,
        resume_link:String
    }]
})

const Jobs=mongoose.model("Job",jobsSchema);

module.exports=Jobs;