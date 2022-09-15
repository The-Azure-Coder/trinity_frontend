export class Users {
    _id: string;
    email: string;
    password: string;
    roles: string;

    constructor(id?: string, email?: string, password?: string, roles?: string){
        this._id = id!;
        this.email = email!;
        this.password = password!;
        this.roles = roles!;
    }
}