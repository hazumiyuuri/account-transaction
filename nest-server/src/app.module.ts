import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModule } from './transaction/transaction.module';
import { Transaction } from './transaction/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/transaction',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Transaction]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    TransactionModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
