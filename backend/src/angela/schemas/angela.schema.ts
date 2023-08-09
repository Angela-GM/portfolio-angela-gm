import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, {
  HydratedDocument,
  Schema as MongooseSchema,
  Types,
} from 'mongoose';

export type angelaDocument = HydratedDocument<Angela>;

@Schema()
export class Angela {
  @ApiProperty({ example: 'Angela' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'García' })
  @Prop({ required: true })
  surname: string;

  @ApiProperty({
    example: [
      { type: 'email', value: 'angelagm0112@gmail.com' },
      { type: 'phone', value: '696753758' },
    ],
  })
  @Prop([
    {
      type: {
        type: String,
        enum: [
          'email',
          'phone',
          'github',
          'linkedin',
          'codewars',
          'medium',
          'nuwe',
        ],
      },
      value: String,
    },
  ])
  contact: { type: string; value: string }[];

  @ApiProperty({ example: 'Soy una Desarrolladora FullStack...' })
  @Prop({ required: true })
  aboutme: string;

  @ApiProperty({ example: 'https://res.cloudinary.com/...' })
  @Prop({ required: true })
  photo: string;

  @ApiProperty({
    example: [
      { type: 'programmingLang', value: 'JavaScript' },
      { type: 'frameworks', value: 'React' },
      // ... otros ejemplos ...
    ],
  })
  @Prop([
    {
      type: { type: String },
      value: String,
    },
  ])
  skills: { type: string; value: string }[];

  @ApiProperty({
    example: [
      {
        name: 'Bootcamp Fullstack (850h)',
        date: '2023',
        place: 'Factoria F5',
        description: '...',
      },
      {
        name: 'FrontEnd Developer Bootcamp (240 h)',
        date: '2023',
        place: 'Ironhack',
        description: '...',
      },
      // ... otros ejemplos ...
    ],
  })
  @Prop([
    {
      name: String,
      date: String,
      place: String,
      description: String,
    },
  ])
  studies: {
    name: string;
    date: string;
    place: string;
    description: string;
  }[];
}
