import House from "../../models/House.js";


let houses = [];

export default class HouseService{
    constructor(){}
    addHouse(houseData){
        let newHouse = new House(
            houseData.address.value,
            houseData.city.value,
            houseData.state.value,
            houseData.zip.value,
            houseData.price.value,
            houseData.yearBuilt.value,
            houseData.floors.value,
            houseData.rooms.value,
            houseData.bathrooms.value,
            houseData.carGarage.value,
            houseData.image.value
        )
        houses.push(newHouse);
    }
    getHouses(){
        let housesCopy = JSON.parse(JSON.stringify(houses));
        return housesCopy;
    }
}