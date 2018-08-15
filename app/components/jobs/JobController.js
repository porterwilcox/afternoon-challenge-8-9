import JobService from "./JobService.js";

let jobService = new JobService();

export default class HouseController {
    constructor() {
        jobService.getJobs(drawJobs)
        document.getElementById('job-submit').addEventListener("submit", addJob)
    }
}


function drawJobs(jobs) {
    let template = '';
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        template += `
        <div class="col-sm-4">
        <div class="card">
        <div class="card-body">
        <h2 class="card-title">${job.jobTitle}</h2>
        <h3 class="card-subtitle">${job.company}</h3>
        <h5 class="card-subtitle">$${job.rate}</h5>
        <h5 class="card-subtitle">${job.hours} hours/week</h5>
        <p>${job.description}</p>
        </div>
        </div>
        </div>
        `
    }
    document.querySelector(".jobs").innerHTML = template;
    document.querySelector(".job-list-title").style.display = "block";
}
function addJob(e){
    e.preventDefault()
    console.log(e)
    let jobData = e.target
    jobService.addJob(jobData, drawJobs)
}

document.querySelector(".job-btn").addEventListener('click', () => {
    document.querySelector(".post-job").style.display = "block";
});
document.querySelector(".close-job").addEventListener('click', () => {
    document.querySelector(".post-job").style.display = "none";
});
