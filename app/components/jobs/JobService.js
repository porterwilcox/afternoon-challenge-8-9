import Job from "../../models/Job.js";


let jobs = [];

export default class JobService {
    constructor() { }
    addJob(jobData) {
        let newJob = new Job(
            jobData.company.value,
            jobData.city.value,
            jobData.state.value,
            jobData.zip.value,
            jobData.jobTitle.value,
            jobData.pay.value,
            jobData.jobDescription.value,
            jobData.phone.value,
            jobData.email.value,
            jobData.image.value
        )
        jobs.push(newJob)
    }
    getJobs(){
        let jobsCopy = JSON.parse(JSON.stringify(jobs));
        return jobsCopy;
    }
}