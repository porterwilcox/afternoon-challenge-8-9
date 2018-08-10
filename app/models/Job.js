export default class Job{
    constructor(
        company,
        city,
        state,
        zip,
        jobTitle,
        pay,
        jobDescription,
        phone,
        email,
        image
    ){
        this.company = company;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.jobTitle = jobTitle;
        this.pay = pay;
        this.jobDescription = jobDescription;
        this.phone = phone;
        this.email = email;
        this.image = image;
    }
}