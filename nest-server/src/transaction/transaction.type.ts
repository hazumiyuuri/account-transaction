import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Transaction')
export class TransactionType {
    @Field(type => ID)
    id: string;

    @Field()
    description: string;

    @Field()
    date: string;
    
    @Field()
    amount: number;

    @Field()
    currency: number;

    @Field()
    status: string;
}