import User from "../../class/user.js";
import UserDAO from "../../dao/user.js";
import { passwordToHash } from "../../util/password_hash.js";

export default class UserController {
	static async getAllUser(request, response): Promise<void> {
		try {
			response.send(await UserDAO.getAllUser());
		} catch (error) {
			response.status().json({
				message: error,
			});
		}
	}

	static async getUser(request, response): Promise<void> {
		try {
			const id = Number(request.params.id);
			const user = await UserDAO.getUser(id);

			response.send(user);
		} catch (error) {
			response.status().json({
				message: error,
			});
		}
	}

	static async createUser(request, response): Promise<void> {
		try {
			const hash = await passwordToHash(request.body.password);
			const user: User = new User(
				request.body.firstName,
				request.body.lastName,
				hash
			);
			const mongoResponse = await UserDAO.addUser(user);

			response.send(mongoResponse);
		} catch (error) {
			response.status().json({
				message: error,
			});
		}
	}

	static async updateUser(request, response): Promise<void> {
		try {
			const hash = await passwordToHash(request.body.password);
			const id = Number(request.params.id);

			request.body.password = hash;

			const mongoResponse = await UserDAO.updateUser(id, request.body);

			response.send(mongoResponse);
		} catch (error) {
			response.status().json({
				message: error,
			});
		}
	}

	static async deleteUser(request, response): Promise<void> {
		try {
			const id = Number(request.params.id);
			const mongoResponse = await UserDAO.deleteUser(id);

			response.send(mongoResponse);
		} catch (error) {
			response.status().json({
				message: error,
			});
		}
	}
}
