/* eslint-disable no-mixed-spaces-and-tabs */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, {
  HydratedDocument,
  Schema as MongooseSchema,
  Types,
  ObjectId,
} from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({ example: 'Jhon' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'Connor' })
  @Prop({ required: true })
  last_name: string;

  @ApiProperty({ example: 'jhon.connor@judgmentday.com' })
  @Prop({ required: true, index: { unique: true } })
  email: string;

  @ApiProperty({ example: '12345' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ example: 'user | admin' })
  @Prop({ default: 'user' })
  profile: string;

  @ApiProperty({ example: '4j4jllleu99xaey21' })
  @Prop()
  recovery_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
