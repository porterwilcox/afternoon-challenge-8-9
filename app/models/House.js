export default class House{
    constructor(
        address,
        city,
        state,
        zip,
        price,
        yearBuilt,
        floors,
        rooms,
        bathrooms,
        carGarage,
        image
    ){
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.price = price;
        this.yearBuilt = yearBuilt;
        this.floors = floors;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.carGarage = carGarage;
        this.image = image;
    }
}