export class Products {
    _id: string;
    image: string;
    name: string;
    description: string;
    rating: number;
    price: string;

    constructor(id?: string, image?: string, name?: string, description?: string, rating?: number, price?: string){
        this._id = id!;
        this.image = image!;
        this.name= name!;
        this.description = description!;
        this.rating = rating!;
        this.price = price!;
    }
}