import { v4 as uuid } from "uuid";
import BankAccount from "./bank-account";

export default class Bank {
	private bankId: string;

	constructor() {
		this.bankId = uuid();
	}

	static create() {
		const bank = new Bank();
		return bank;
	}

	createAccount(money: number) {
		const account = new BankAccount(money);
		return account;
	}

	getId() {
		return this.bankId;
	}
}
