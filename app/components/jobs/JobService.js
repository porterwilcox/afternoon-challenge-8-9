import Job from "../../models/Job.js";

const jobsAPI = axios.create({
    baseURL: `//localhost:3000/api/jobs`,
    timeout: 3000 //will throw error if no promise within 3 seconds
})


export default class JobService {
    constructor() {

    }
    getJobs(callback) {
        jobsAPI.get()
            .then(res => {
                console.log(res)
                let jobs = res.data.map(j => {
                    return new Job(j)
                })
                callback(jobs)
            })
    }
    addJob(jobData, callback) {
        let newJob = new Job({
            company: jobData.company.value,
            jobTitle: jobData.jobTitle.value,
            hours: jobData.hours.value,
            rate: jobData.rate.value,
            description: jobData.description.value
        })
        jobsAPI.post('', newJob)
            .then(res => {
                this.getJobs(callback)
            })
    }
    deleteJob(id, callback) {
        jobsAPI.delete(id)
            .then(res => {
                this.getJobs(callback)
            })
    }
    bidMore(id, newRate, callback) {
        jobsAPI.put(id, newRate)
            .then(res => {
                this.getJobs(callback)
            })
    }
}