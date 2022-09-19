export class Products {
    _id: string;
    image: string;
    name: string;
    quantity: number;
    description: string;
    rating: string;
    price: number;

    constructor(id?: string, image?: string, name?: string, quantity?: number, description?: string, rating?: string, price?: number) {
        this._id = id!;
        this.image = image!;
        this.name = name!;
        this.quantity = quantity!;
        this.description = description!;
        this.rating = rating!;
        this.price = price!;
    }
}