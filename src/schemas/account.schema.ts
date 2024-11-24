import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Account extends Document {
    @Prop({required: true, unique: true})
    accountId: Number

    @Prop({required: true})
    accountHolder: String

    @Prop({required: true})
    accountType: String

    @Prop({default: 0})
    balance: Number

    @Prop({default: Date.now})
    createdAt: Date
}

export const AccountSchema = SchemaFactory.createForClass(Account);