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

    async createTransaction({ description, amount, currency, status }): Promise<Transaction> {
        const transaction = this.transactionRepository.create({
            id: uuid(),
            description,
            amount: parseFloat(amount),
            currency,
            status
        });

        return this.transactionRepository.save(transaction);
    }
}
