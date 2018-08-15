export default class Job{
    constructor(reqData){
        this._id = reqData._id
        this.company = reqData.company;
        this.jobTitle = reqData.jobTitle;
        this.hours = reqData.hours;
        this.rate = reqData.rate;
        this.description = reqData.description;
    }
}