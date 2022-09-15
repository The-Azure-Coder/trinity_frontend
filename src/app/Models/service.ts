export class Services {
    _id: string;
    image: string;
    title: string;
    description: string;
    price: string;

    constructor(id?: string, image?: string, title?: string, description?: string, price?: string){
        this._id = id!;
        this.image = image!;
        this.title= title!;
        this.description = description!;
        this.price = price!;
    }
}