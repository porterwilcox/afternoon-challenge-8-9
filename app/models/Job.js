export default class Job{
    constructor(reqData){
        this.company = reqData.company;
        this.jobTitle = reqData.jobTitle;
        this.hours = reqData.hours;
        this.rate = reqData.rate;
        this.description = reqData.description;
    }
}