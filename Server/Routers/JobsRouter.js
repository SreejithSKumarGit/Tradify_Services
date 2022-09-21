const express=require("express");
const { getAllJobs, getJobDetails, addJob, addApplicant } = require("../Handlers/JobsHandler");

const JobsRouter=express.Router();

JobsRouter.get("/getalljobs",getAllJobs);
JobsRouter.post("/getjobdetails",getJobDetails);
JobsRouter.post("/addjob",addJob);
JobsRouter.post("/addapplicant",addApplicant);

module.exports=JobsRouter;