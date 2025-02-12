import IdGenerator from "../util/id_generator.js";

export default class User {
    private id: number;
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string, id: number = IdGenerator.generateId()){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getId(): number {
        return this.id;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }
}