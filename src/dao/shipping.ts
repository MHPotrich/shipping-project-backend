import Address from "../class/address.js";
import Shipping from "../class/shipping.js";
import User from "../class/user.js";
import AddressDAO from "./address.js";
import UserDAO from "./user.js";

let shippingDataBase;

async function getShippingDataBase(): Promise<void> {
    if(shippingDataBase) return;

    shippingDataBase = await global.mongoClient.db(global.dataBaseName).collection("shipping");
}

export default class ShippingDAO {
    static async addShipping(shipping): Promise<any> {
        await getShippingDataBase();

        try {
            return await shippingDataBase.insertOne(shipping);
        } catch(error){
            console.error(error);
            return null;
        }
    }

    static async getShipping(shippingCode: number): Promise<Shipping|null> {
        await getShippingDataBase();

        try {
            const shippingMongo = await shippingDataBase.findOne({ 'shippingCode': shippingCode });
            const destination: Address = await AddressDAO.getAddress(shippingMongo.destination);
            const sendedBy: User = await UserDAO.getUser(shippingMongo.sendedBy);
            const sendedFor: User = await UserDAO.getUser(shippingMongo.sendedFor);
            const shipping: Shipping = new Shipping(sendedBy, sendedFor, destination);

            return shipping;
        } catch(error){
            console.error(error);
            return null;
        }
    }

    static async getAllShipping(){
        await getShippingDataBase();

        try {
            const cursor = await shippingDataBase.find({});

            return cursor.toArray();
        } catch(error){
            console.error(error);
            return { error };
        }
    }

    static async updateShipping(shippingCode: number, newContent: object){
        await getShippingDataBase();

        try {
            const shipping = await shippingDataBase.findOne({ 'shippingCode': shippingCode });

            return await shippingDataBase.updateOne({ _id: shipping["_id"] }, { $set: newContent });
        } catch(error){
            console.error(error);
            return { error };
        }
    }

    static async deleteShipping(shippingCode: number){
        await getShippingDataBase();

        try {
            const shipping = await shippingDataBase.findOne({ 'shippingCode': shippingCode });

            return await shippingDataBase.deleteOne({ _id: shipping["_id"] });
        } catch(error){
            console.error(error);
            return { error };
        }
    }
}