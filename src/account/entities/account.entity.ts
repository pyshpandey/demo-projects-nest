import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Account {

    @PrimaryColumn({generated: 'uuid'})
    id: string;

    @Column({nullable: false})
    accountHolder: string;

    @Column({nullable: false})
    accountType: string;

    @Column()
    balance: string;

    @Column()
    createdAt: Date;

}
