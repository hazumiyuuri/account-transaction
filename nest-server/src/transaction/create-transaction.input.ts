import { Field, InputType } from "@nestjs/graphql";
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateTransactionInput {
    @MinLength(1)
    @Field()
    description: string;

    @Field()
    amount: number;
    
    @Field()
    currency: string;

    @MinLength(1)
    @Field()
    status: string;
}