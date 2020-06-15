import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TransactionType } from './transaction.type';
import { TransactionService } from './transaction.service';
import { CreateTransactionInput } from './create-transaction.input';

@Resolver(of => TransactionType)
export class TransactionResolver {
    constructor(
        private transactionService: TransactionService
    ) {

    }

    @Query(returns => TransactionType)
    transaction(
        @Args('id') id: string,
    ) {
        return this.transactionService.getTransaction(id);
    }

    @Query(returns => [TransactionType])
    transactions() {
        return this.transactionService.getTransactions();
    }

    @Mutation(returns => TransactionType)
    createTransaction(
        @Args('createTransactionInput') createTransactionInput: CreateTransactionInput,
    ) {
        return this.transactionService.createTransaction(createTransactionInput)
    }
}