import Address from "./address.js";
import User from "./user.js";
import Location from "./location.js";
import IdGenerator from "../util/id_generator.js";

enum shippingStatus {
    created = "CREATED",
    moving = "MOVING",
    delivered = "DELIVERED"
}

export default class Shipping {
    private shippingCode: number;
    private status: shippingStatus;
    private sendedBy: number;
    private sendedFor: number;
    private locationHistory: Array<Location> = [];
    private destination: number;

    constructor(sendedBy: User, sendedFor: User, destination: Address){
        this.shippingCode = IdGenerator.generateId()
        this.sendedBy = sendedBy.getId();
        this.sendedFor = sendedFor.getId();
        this.destination = destination.getId();
        this.status = shippingStatus.created;
    }

    public getStatus(): shippingStatus {
        return this.status;
    }

    public setStatus(newStatus: shippingStatus): void {
        this.status = newStatus;
    }

    public addLocation(newLocation: Location): void {
        this.locationHistory.push(newLocation);
    }

    public getLocationHistory(): Array<Location> {
        return this.locationHistory;
    }

    public getDestination(): number {
        return this.destination;
    }
}