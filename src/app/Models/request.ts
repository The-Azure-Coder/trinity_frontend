export class Requests {
    _id: string;
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    address: string;
    plumber: string;
    service: string;
    issue: string;

    constructor(id?: string, firstName?: string, lastName?: string, telephone?: string, email?: string, address?: string,
        plumber?:string, service?:string, issue?:string){
        this._id = id!;
        this.firstName = firstName!;
        this.lastName= lastName!;
        this.telephone = telephone!;
        this.email = email!;
        this.address = address!;
        this.plumber = plumber!;
        this.service = service!;
        this.issue = issue!;
    }
}