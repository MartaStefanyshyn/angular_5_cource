export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    constructor(user?: any) {
       this.id = user && user.id || null;
       this.firstName = user && user.firstName || '';
       this.lastName = user && user.lastName || '';
       this.email = user && user.email || '';
       this.age = user && user.age || null;
    }
}
