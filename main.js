import HouseController from "./app/components/houses/HouseController.js";
import JobController from "./app/components/jobs/JobController.js";


export default class App {
    constructor() {
        this.controllers = {
            houseController: new HouseController(),
            jobController: new JobController()
        }
    }
}

//@ts-ignore
window.app = new App();