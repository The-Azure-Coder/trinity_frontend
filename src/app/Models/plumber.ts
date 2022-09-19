export class Plumbers {
  _id: string;
  name: string;
  email: string;
  description: string;
  telephone: string;
  rating: string;
  image: string;

  constructor(
    id?: string,
    image?: string,
    name?: string,
    email?: string,
    description?: string,
    telephone?: string,
    rating?: string
  ) {
    this._id = id!;
    this.image = image!;
    this.name = name!;
    this.email = email!;
    this.description = description!;
    this.telephone = telephone!;
    this.rating = rating!;
  }
}
