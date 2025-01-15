import { v4 as uuid } from "uuid";

export default class BankAccount {
	private id: string;
	private balance: number;

	constructor(amount: number) {
		this.id = uuid();
		this.balance = amount;
	}

	getId() {
		return this.id;
	}
}

