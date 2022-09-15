export class Plumbers {
    _id: string;
    name: string;
    image: string;
    email: string;
    tel_number: string;
    customer_rating: string;

    constructor(id?: string, image?: string, name?: string, email?: string, tel_number?: string, customer_rating?: string){
        this._id = id!;
        this.image = image!;
        this.name= name!;
        this.email = email!;
        this.tel_number = tel_number!;
        this.customer_rating = customer_rating!;
    }
}