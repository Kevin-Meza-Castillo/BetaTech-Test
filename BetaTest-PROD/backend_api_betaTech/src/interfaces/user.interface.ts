export interface IUser {
    idNumber: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    ocupation: string;
    age: number;
    active?: boolean;
}