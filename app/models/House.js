export default class House{
    constructor(reqData){
        this._id = reqData._id
        this.imgUrl = reqData.imgUrl;
        this.price = reqData.price;
        this.year = reqData.year
        this.bedrooms = reqData.bedrooms;
        this.bathrooms = reqData.bathrooms;
        this.levels = reqData.levels;
        this.description = reqData.description
    }
}