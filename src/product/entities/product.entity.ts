import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryColumn({generated: 'uuid'})
    id: string;

    @Column({nullable: false, unique: true})
    name: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    price: string;

}
