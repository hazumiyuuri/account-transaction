import { Entity, PrimaryColumn, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Transaction {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    date: string = new Date().toISOString();

    @Column("double")
    amount: number;

    @Column()
    currency: string;

    @Column()
    status: string;
}