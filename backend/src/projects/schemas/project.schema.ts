import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, {
  HydratedDocument,
  Schema as MongooseSchema,
  Types,
} from 'mongoose';
import { Languages, Skills } from '../dto/project.model';

export type projectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @ApiProperty({ example: 'Project name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'Project description' })
  @Prop({ required: true })
  description: string;

  @ApiProperty({
    example: [
      {
        skills: {
          programmingLang: ['JavaScript', 'TypeScript'],
          frameworks: ['React'],
        },
      },
      // ... otros ejemplos ...
    ],
  })
  @Prop({ type: Skills }) // Usa el tipo Skills aquí
  skills: Skills;

  @ApiProperty({
    example: [
      {
        spanish: 'nativo',
        english: 'A1',
        catalan: 'bilingüe',
      },
    ],
  })
  @Prop({ type: Languages }) // Usa el tipo Languages aquí
  languages: Languages;

  @ApiProperty({
    example: [
      'https://res.cloudinary.com/drjyg98uv/image/upload/v1682094507/portfolio/midtern.png',
    ],
  })
  @Prop({ required: true })
  images: string[];

  @ApiProperty({ example: 'https://midterm-ironhack-red.vercel.app/' })
  @Prop({ required: true })
  demo: string;

  @ApiProperty({ example: 'https://github.com/Angela-GM/midterm-ironhack' })
  @Prop({ required: true })
  repo: string;

  @ApiProperty({ example: 'frontend' })
  @Prop({ required: true })
  category: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
