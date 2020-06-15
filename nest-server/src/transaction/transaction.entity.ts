import { Entity, PrimaryColumn, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Transaction {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;
}