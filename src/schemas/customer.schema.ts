import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Customer extends Document {

    @Prop({required: true})
    name: String;

    @Prop({required: true, unique: true})
    email: String

    @Prop({required: true})
    phone: String

    @Prop({required: true})
    address: String
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);