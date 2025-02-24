import Address from "../class/address.js";

let addressDataBase;

async function getAddressDataBase(): Promise<void> {
	if (addressDataBase) return;

	addressDataBase = await global.mongoClient
		.db(global.dataBaseName)
		.collection("address");
}

export default class AddressDAO {
	static async addAddress(user): Promise<any> {
		await getAddressDataBase();

		try {
			return await addressDataBase.insertOne(user);
		} catch (error) {
			console.error(error);
			return { error };
		}
	}

	static async getAddress(id: number): Promise<Address | null> {
		await getAddressDataBase();

		try {
			const addressMongo = await addressDataBase.findOne({ id: id });
			const address: Address = new Address(
				addressMongo.country,
				addressMongo.state,
				addressMongo.city,
				addressMongo.address1,
				addressMongo.address2,
				addressMongo.zipCode,
				id
			);

			return address;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	static async getAllAddresses(): Promise<Address[] | null> {
		await getAddressDataBase();

		try {
			const cursor = await addressDataBase.find({});
			let users: Array<Address> = [];

			cursor
				.toArray()
				.forEach((item) =>
					users.push(
						new Address(
							item.country,
							item.state,
							item.city,
							item.address1,
							item.address2,
							item.zipCode,
							item.id
						)
					)
				);

			return users;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	static async updateAddress(id: number, newContent: object): Promise<any> {
		await getAddressDataBase();

		try {
			const address = await addressDataBase.findOne({ id: id });

			return await addressDataBase.updateOne(
				{ _id: address["_id"] },
				{ $set: newContent }
			);
		} catch (error) {
			console.error(error);
			return { error };
		}
	}

	static async deleteAddress(id: number): Promise<any> {
		await getAddressDataBase();

		try {
			const address = await addressDataBase.findOne({ id: id });

			return await addressDataBase.deleteOne({ _id: address["_id"] });
		} catch (error) {
			console.error(error);
			return { error };
		}
	}
}
