import ShippingDAO from "../../dao/shipping.js";

export default class ShippingController {
    static async getAllShippings(request, response) {
        response.send(await ShippingDAO.getAllShipping());
    }

    static async getShipping(request, response) {
        const shipping = await ShippingDAO.getShipping(request.param.code);

        response.send(shipping);
    }

    static async createShipping(request, response){
        const shipping = {
            code: Math.random() * 10000,
            status: "PENDING",
            location: ""
        }

        const mongoResponse = await ShippingDAO.addShipping(shipping);

        response.send(mongoResponse);
    }

    static async updateShipping(request, response){

    }
}