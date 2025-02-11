export default class Address {
    private country: string;
    private state: string;
    private city: string;
    private address1: string;
    private address2: string;
    private zipCode: number;

    constructor(country: string, state: string, city: string, address1: string, address2: string = "", zipCode: number){
        this.country = country;
        this.state = state;
        this.city = city;
        this.address1 = address1;
        this.address2 = address2;
        this.zipCode = zipCode;
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

    public getAddress1(): string {
        return this.address1;
    }

    public getAddress2(): string {
        return this.address2;
    }

    public getZipCode(): number {
        return this.zipCode;
    }
}