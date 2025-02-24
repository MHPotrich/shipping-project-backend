import IdGenerator from "../util/id_generator.js";
import bcrypt from "bcrypt";

export default class User {
	private id: number;
	private firstName: string;
	private lastName: string;
	private password: string;

	constructor(
		firstName: string,
		lastName: string,
		password: string,
		id: number = IdGenerator.generateId()
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
	}

	public getId(): number {
		return this.id;
	}

	public getFirstName(): string {
		return this.firstName;
	}

	public getLastName(): string {
		return this.lastName;
	}

	public async checkPassword(password: string) {
		return new Promise((resolve, reject) => {
			if (this.password === undefined || this.password === null) reject();

			bcrypt.compare(this.password, password, (error, result) => {
				if (error) {
					reject(error);
					return;
				}

				resolve(result);
			});
		});
	}
}
