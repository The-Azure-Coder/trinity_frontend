export class Contact {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    subject: string;
    message: string;

    constructor(id?: string, firstName?: string, lastName?: string, email?: string, phoneNumber?: number, subject?: string, message?: string){
        this._id = id!;
        this.firstName = firstName!;
        this.lastName= lastName!;
        this.email = email!;
        this.phoneNumber = phoneNumber!;
        this.subject = subject!;
        this.message = message!;
    }
}