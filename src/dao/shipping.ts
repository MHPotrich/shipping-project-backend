import mongodb from 'mongodb';

const ObjectId = mongodb.ObjectId;
let shippingDataBase;

export default class ShippingDAO {
    static async injectDataBase(conn){
        if(shippingDataBase) return;

        try {
            shippingDataBase = await conn.db("shipping").collection("shipping");
        } catch(error){
            console.error(error);
        }
    }

    static async addShipping(shipping){
        try {
            return await shippingDataBase.insertOne(shipping);
        } catch(error){
            console.error(error);
            return { error };
        }
    }

    static async getShipping(shippingCode: number){
        try {
            return await shippingDataBase.findOne({ 'shippingCode': shippingCode });
        } catch(error){
            console.error(error);
            return { error };
        }
    }

    static async getAllShipping(){
        try {
            const cursor = await shippingDataBase.find({});

            return cursor.toArray();
        } catch(error){
            console.error(error);
            return { error };
        }
    }
}