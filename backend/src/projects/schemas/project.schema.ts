import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, {
  HydratedDocument,
  Schema as MongooseSchema,
  Types,
} from 'mongoose';

export type projectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @ApiProperty({ example: 'Project name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'Project description' })
  @Prop({ required: true })
  description: string;

  @ApiProperty({ example: ['JavaScript', 'HTML', 'CSS'] })
  @Prop({ required: true })
  programmingLang: string[];

  @ApiProperty({ example: ['Vue.js'] })
  @Prop({ required: true })
  frameworks: string[];

  @ApiProperty({ example: ['Bootstrap', 'Tailwind CSS', 'Styled Components'] })
  @Prop({ required: true })
  libraries: string[];

  @ApiProperty({ example: ['Node.js', 'Nest.js'] })
  @Prop({ required: true })
  backend: string[];

  @ApiProperty({ example: ['MongoDB'] })
  @Prop({ required: true })
  databases: string[];

  @ApiProperty({ example: ['Vitest'] })
  @Prop({ required: true })
  testing: string[];

  @ApiProperty({ example: ['Git', 'GitHub', 'Postman'] })
  @Prop({ required: true })
  tools: string[];

  @ApiProperty({
    example: ['SCRUM', 'Agile', 'Trello', 'MVC', 'REST API', 'SEO', 'UX/UI'],
  })
  @Prop({ required: true })
  others: string[];

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
