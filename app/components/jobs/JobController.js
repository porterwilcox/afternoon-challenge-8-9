import JobService from "./JobService.js";


let jobService = new JobService();

function postJob() {
    document.querySelector(".post-job").style.display = "block";
}
document.querySelector(".job-btn").addEventListener('click', postJob);
function closeJob() {
    document.querySelector(".post-job").style.display = "none";
}
document.querySelector(".close-job").addEventListener('click', closeJob);

function drawJobs(){
    let jobs = jobService.getJobs();
    let template = '';
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        template += `
        <div class="col-sm-4">
        <div class="card">
            <img class="card-img-top" src="${job.image}" alt="your house">
            <div class="card-body">
                <h4 class="card-title">${job.jobTitle}</h4>
                <h5 class="card-subtitle">$${job.pay}</h5>
                <h5 class="card-subtitle">${job.company}</h5>
                <h6 class="card-subtitle">${job.city}, ${job.state} ${job.zip}</h6>
                <ul class="list-group">
                    <li class="list-group-item">Contact:</li>
                    <li class="list-group-item">${job.phone}</li>
                    <li class="list-group-item">${job.email}</li>
                </ul>
                <p>${job.jobDescription}</p>
            </div>
        </div>
    </div>
        `
    }
    document.querySelector(".jobs").innerHTML = template;
    document.querySelector(".job-list-title").style.display = "block";
}

export default class HouseController {
    constructor() { }
    addJob(e) {
        e.preventDefault();
        let jobData = e.target;
        jobService.addJob(jobData);
        jobData.reset();
        drawJobs();
        closeJob();
    }
}