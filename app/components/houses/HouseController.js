import HouseService from "./HouseService.js";

let houseService = new HouseService();;

function listHouse() {
    document.querySelector(".list-house").style.display = "block";
}
document.querySelector(".house-btn").addEventListener('click', listHouse);
function closeHouse() {
    document.querySelector(".list-house").style.display = "none";
}
document.querySelector(".close-house").addEventListener('click', closeHouse);

function drawHouses() {
    let houses = houseService.getHouses();
    let template = '';
    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `        
        <div class="col-sm-6">
            <div class="card">
                <img class="card-img-top" src="${house.image}" alt="your house">
                <div class="card-body">
                    <h4 class="card-title">$${house.price}</h4>
                    <h5 class="card-subtitle">${house.address}</h5>
                    <h6 class="card-subtitle">${house.city}, ${house.state} ${house.zip}</h6>
                    <ul class="list-group">
                        <li class="list-group-item">Floors: ${house.floors}</li>
                        <li class="list-group-item">Rooms: ${house.rooms}</li>
                        <li class="list-group-item">Bathrooms: ${house.bathrooms}</li>
                        <li class="list-group-item">Car Garage: ${house.carGarage}</li>
                    </ul>
                    <p>Built in ${house.yearBuilt}</p>
                </div>
            </div>
        </div>    
        `
    }
    document.querySelector(".houses").innerHTML = template;
    document.querySelector(".house-list-title").style.display = "block";
}

export default class HouseController {
    constructor() {
        // if could save houses then would need to do this
        // drawHouses();
    }
    addHouse(e) {
        e.preventDefault();
        let houseData = e.target;
        houseService.addHouse(houseData);
        houseData.reset();
        drawHouses();
        closeHouse();
    }
}