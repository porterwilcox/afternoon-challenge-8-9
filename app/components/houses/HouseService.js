import House from "../../models/House.js";

const housesAPI = axios.create({
    baseURL: `https://bcw-gregslist.herokuapp.com/api/houses/`,
    timeout: 3000 // throw error if no promise returned in 3 seconds
})

export default class HouseService {
    constructor() { }
    getHouses(callback) {
        housesAPI.get()
            .then(res => {
                let houses = res.data.data.map(h => {
                    return new House(h)
                })
                callback(houses)
            })
    }
    addHouse(houseData, callback) {
        let newHouse = new House({
            imgUrl: houseData.imgUrl.value,
            price: houseData.price.value,
            year: houseData.year.value,
            bedrooms: houseData.bedrooms.value,
            bathrooms: houseData.bathrooms.value,
            levels: houseData.levels.value,
            description: houseData.description.value
        })
        housesAPI.post('', newHouse)
            .then(res => {
                this.getHouses(callback)
            })
    }
    deleteHouse(id, callback) {
        housesAPI.delete(id)
            .then(res => {
                this.getHouses(callback)
            })
    }
    bidHouse(id, newPrice, callback){
        housesAPI.put(id, newPrice)
            .then(res => {
                this.getHouses(callback)
            })
    }
}