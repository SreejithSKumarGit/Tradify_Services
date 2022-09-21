const Jobs=require("../Database/Jobs");

//Getting all jobs for Job List page
async function getAllJobs(req,res,next)
{
    try {
        const jobs=await Jobs.find();
        return res.status(200).json({status:"Ok",data:jobs})
    } catch (error) {
        return res.status(400).json({status:"Error",message:error})
    }
}

//Getting more details of a particular job
async function getJobDetails(req,res,next)
{
    try {
        const job=await Jobs.findOne({_id:req.body._id})
        return res.status(200).json({status:"Ok",data:job})
    } catch (error) {
        return res.status(400).json({status:"Error",message:error})
    }
}

//Post a new job
async function addJob(req,res,next)
{
    try {
        await Jobs.create({ title:req.body.title,
                            company:req.body.company,
                            location:req.body.location,
                            description:req.body.description,
                            time_stamp:new Date(),
                            no_of_checks:0,
                            applicants:[]})
        return res.status(200).json({status:"Ok",message:"Jobs posted successfully"})
    } catch (error) {
        return res.status(400).json({status:"Error",message:error})
    }
}

//Add new applicants
async function addApplicant(req,res,next)
{
    try {
        let job=await  Jobs.findOne({_id:req.body._id})
        job.applicants.push({name:req.body.name,
                             email:req.body.email,
                             experience:req.body.experience,
                             ctc:req.body.ctc,
                             resume_link:req.body.resume_link});
        job.no_of_checks++;
        job.save() 
        return res.status(200).json({status:"Ok",message:"Successfully added"}) 
    } catch (error) {
        console.log(error);
        return res.status(400).json({status:"Error",message:error})
    }
}

module.exports={getAllJobs,getJobDetails,addApplicant,addJob};