import HouseService from "./HouseService.js";

let houseService = new HouseService();;

document.querySelector(".house-btn").addEventListener('click', () => {
    document.querySelector(".list-house").style.display = "block";
});
document.querySelector(".close-house").addEventListener('click', () => {
    document.querySelector(".list-house").style.display = "none";
});

function drawHouses(houses) {
    let template = '';
    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `        
        <div class="col-sm-6">
            <div class="card">
                <img class="card-img-top" src="${house.imgUrl}" alt="your house">
                <div class="card-body">
                    <h4 class="card-title">$${house.price}</h4>
                    <button class="btn-primary" onclick="app.controllers.houseController.bidHouse('${house._id}', ${house.price})">Bid higher</button>
                    <ul class="list-group">
                        <li class="list-group-item">Floors: ${house.levels}</li>
                        <li class="list-group-item">Rooms: ${house.bedrooms}</li>
                        <li class="list-group-item">Bathrooms: ${house.bathrooms}</li>
                    </ul>
                    <p>${house.description} Built in ${house.year}</p>
                </div>
                <button class="btn-success" onclick="app.controllers.houseController.deleteHouse('${house._id}')">Purchase</button>
            </div>
        </div>    
        `
    }
    document.querySelector(".houses").innerHTML = template;
    document.querySelector(".house-list-title").style.display = "block";
}
function addHouse(e) {
    e.preventDefault();
    let houseData = e.target;
    houseService.addHouse(houseData, drawHouses);
    houseData.reset();
}

export default class HouseController {
    constructor() {
        houseService.getHouses(drawHouses)
        document.getElementById("house-submit").addEventListener("submit", addHouse)
    }
    deleteHouse(id){
        houseService.deleteHouse(id, drawHouses)
    }
    bidHouse(id, newPrice){
        newPrice += 1000
        let bid = {
            price: newPrice
        }
        houseService.bidHouse(id, bid, drawHouses)
    }
}