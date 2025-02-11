import Address from "./address.js";
import Client from "./client.js";
import Location from "./location.js";

enum shippingStatus {
    created = "CREATED",
    moving = "MOVING",
    delivered = "DELIVERED"
}

export default class Shipping {
    private status: shippingStatus;
    private sendedBy: number;
    private sendedFor: number;
    private locationHistory: Array<Location>;
    private destination: Address;

    constructor(sendedBy: Client, sendedFor: Client, destination: Address){
        this.sendedBy = sendedBy.getId();
        this.sendedFor = sendedFor.getId();
        this.destination = destination;
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
}