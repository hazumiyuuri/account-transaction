import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { Repository } from 'typeorm';
import  { v4 as uuid } from 'uuid';
import { CreateTransactionInput } from './create-transaction.input';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>,
    ) {}

    async getTransaction(id: string): Promise<Transaction> {
        return this.transactionRepository.findOne({ id })
    }

    async getTransactions(): Promise<Transaction[]> {
        return this.transactionRepository.find();
    }

    async createTransaction(createTransactionInput: CreateTransactionInput): Promise<Transaction> {
        const { description, amount, currency, status } = createTransactionInput;
        const transaction = this.transactionRepository.create({
            id: uuid(),
            description,
            amount,
            currency,
            status
        });

        return this.transactionRepository.save(transaction);
    }
}
