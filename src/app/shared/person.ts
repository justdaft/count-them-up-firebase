import { IPerson } from './models';

export class Person implements IPerson {
    createdAt: number = Firebase.ServerValue.TIMESTAMP;
    name: string;
    dob: string;
    age: number;
    theme: number;

    constructor(person: IPerson) {
        this.name = person.name;
        this.dob = person.dob;
        this.age = person.age;
        this.theme = person.theme;
    }
}

