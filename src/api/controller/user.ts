import User from "../../class/user.js";
import UserDAO from "../../dao/user.js";

export default class UserController {
    static async getAllUser(request, response): Promise<void> {
        response.send(await UserDAO.getAllUser());
    }

    static async getUser(request, response): Promise<void> {
        const user = await UserDAO.getUser(request.params.id);

        response.send(user);
    }

    static async createUser(request, response): Promise<void> {
        // TODO: add validation for user data

        const user: User = new User(request.body.firstName, request.body.lastName);
        const mongoResponse = await UserDAO.addUser(user);

        response.send(mongoResponse);
    }

    static async updateUser(request, response): Promise<void> {
        const mongoResponse = await UserDAO.updateUser(request.params.id, request.body);

        response.send(mongoResponse);
    }

    static async deleteUser(request, response): Promise<void> {
        const mongoResponse = await UserDAO.deleteUser(request.params.id);

        response.send(mongoResponse);
    }
}