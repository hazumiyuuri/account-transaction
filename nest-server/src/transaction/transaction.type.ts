import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Transaction')
export class TransactionType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;
    
    @Field()
    endDate: string;
}