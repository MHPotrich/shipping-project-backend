import UserDAO from "../../dao/user.js";

export default class LoginController {
	static async doLogin(request, response) {
		try {
			const id = parseInt(request.body.userId);
			const user = await UserDAO.getUser(id);
			const isPasswordCorrect = await user.checkPassword(
				request.body.password
			);

			response.json({
				isCorrect: isPasswordCorrect,
			});
		} catch (error) {
			response.status(500).json({
				message: error,
			});
		}
	}
}
