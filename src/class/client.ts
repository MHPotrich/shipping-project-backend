export default class Client {
    private id: number;
    private firstName: string;
    private lastName: string;

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