import IdGenerator from "../util/id_generator.js";

export default class Location {
    private id: number;
    private country: string;
    private state: string;
    private city: string;
    private details: string;

    constructor(country: string, state: string, city: string, details: string = ""){
        this.id = IdGenerator.generateId();
        this.country = country;
        this.state = state;
        this.city = city;
        this.details = details;
    }

    public getCountry(): string {
        return this.country;
    }

    public getState(): string {
        return this.state;
    }

    public getCity(): string {
        return this.city;
    }

    public getDetails(): string {
        return this.details;
    }
}