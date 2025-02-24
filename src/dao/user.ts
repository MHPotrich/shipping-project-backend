import User from "../class/user.js";

let userDataBase;

async function getUserDataBase(): Promise<void> {
    if(userDataBase) return;

    userDataBase = await global.mongoClient.db(global.dataBaseName).collection("user");
}

export default class UserDAO {
    static async addUser(user): Promise<any> {
        await getUserDataBase();

        try {
            return await userDataBase.insertOne(user);
        } catch(error){
            console.error(error);
            return null;
        }
    }

    static async getUser(id: number): Promise<User|null> {
        await getUserDataBase();

        try {
            const userMongo = await userDataBase.findOne({ 'id': id });
            const user: User = new User(userMongo.firstName, userMongo.lastName, userMongo.password, userMongo.id);

            return user;
        } catch(error){
            console.error(error);
            return null;
        }
    }

    static async getAllUser(): Promise<User[]|null> {
        await getUserDataBase();

        try {
            const cursor = await userDataBase.find().toArray();
            let users: Array<User> = [];

            cursor.forEach(item => users.push(new User(item.firstName, item.lastName, item.password, item.id)));

            return users;
        } catch(error){
            console.error(error);
            return null;
        }
    }

    static async updateUser(id: number, newContent: object): Promise<any> {
        await getUserDataBase();

        try {
            const user = await userDataBase.findOne({ 'id': id });

            return await userDataBase.updateOne({ _id: user["_id"] }, { $set: newContent });
        } catch(error){
            console.error(error);
            return null;
        }
    }

    static async deleteUser(id: number): Promise<any> {
        await getUserDataBase();

        try {
            const user = await userDataBase.findOne({ 'id': id });

            return await userDataBase.deleteOne({ _id: user["_id"] });
        } catch(error){
            console.error(error);
            return null;
        }
    }
}