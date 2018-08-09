import HouseController from "./app/components/houses/HouseController.js";


export default class App {
    constructor() {
        this.controllers = {
            houseController: new HouseController()
        }
    }
}

//@ts-ignore
window.app = new App();