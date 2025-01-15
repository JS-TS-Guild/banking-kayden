import { v4 as uuid } from "uuid";

export default class TransactionService{
    private id : string;

    constructor(){
        this.id = uuid();
    }
}