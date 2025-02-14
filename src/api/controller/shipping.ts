import Address from "../../class/address.js";
import Shipping from "../../class/shipping.js";
import User from "../../class/user.js";
import AddressDAO from "../../dao/address.js";
import ShippingDAO from "../../dao/shipping.js";
import UserDAO from "../../dao/user.js";

export default class ShippingController {
    static async getAllShippings(request, response): Promise<void> {
        response.send(await ShippingDAO.getAllShipping());
    }

    static async getShipping(request, response): Promise<void> {
        const shippingCode = Number(request.params.code);
        const shipping = await ShippingDAO.getShipping(shippingCode);

        response.send(shipping);
    }

    static async createShipping(request, response): Promise<void> {
        const sendBy: User = await UserDAO.getUser(request.body.sendById);
        const sendFor: User = await UserDAO.getUser(request.body.sendForId);
        const destination: Address = new Address(request.body.destination.country, request.body.destination.state, request.body.destination.city, request.body.destination.address1, request.body.destination.address2, request.body.destination.zipCode);
        const shipping: Shipping = new Shipping(sendBy, sendFor, destination);
        const mongoAddressResponse = await AddressDAO.addAddress(destination);
        const mongoShippingResponse = await ShippingDAO.addShipping(shipping);

        response.send({
            shipping: mongoShippingResponse,
            address: mongoAddressResponse
        });
    }

    static async updateShipping(request, response): Promise<void> {
        const shippingCode = Number(request.params.code);
        const mongoResponse = await ShippingDAO.updateShipping(shippingCode, request.body);

        response.send(mongoResponse);
    }

    static async deleteShipping(request, response): Promise<void> {
        const shippingCode = Number(request.params.code);
        const mongoResponse = await ShippingDAO.deleteShipping(shippingCode);

        response.send(mongoResponse);
    }
}