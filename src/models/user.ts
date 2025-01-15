import { v4 as uuid } from "uuid";

export default class User {
	private userId: string;
	private name: string;
	private accounts: string[];

	constructor(name: string, accounts: string[]) {
		this.userId = uuid();
		this.name = name;
		this.accounts = accounts;
	}

	static create(name: string, accounts: string[]) {
		return new User(name, accounts);
	}
}
