import bcrypt from "bcrypt";

const saltRounds = 10;

export async function passwordToHash(password: string): Promise<string> {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(saltRounds, (errorSalt, salt) => {
			if (errorSalt) reject(errorSalt);

			bcrypt.hash(password, salt, (errorHash, hash) => {
				if (errorHash) reject(errorHash);

				resolve(hash);
			});
		});
	});
}
