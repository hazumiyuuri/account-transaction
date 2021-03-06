import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Transaction])
    ],
    providers: [
        TransactionResolver, 
        TransactionService
    ]
})
export class TransactionModule {}
