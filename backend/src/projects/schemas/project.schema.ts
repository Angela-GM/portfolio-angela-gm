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
  //   _id: Types.ObjectId;
  @ApiProperty({ example: 'Project name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'Project description' })
  @Prop({ required: true })
  description: string;

  @ApiProperty({ example: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3'] })
  @Prop({ required: true })
  languages: string[];

  @ApiProperty({
    example: ['Visual Studio Code', 'Git', 'GitHub', 'Vite', 'Supabase'],
  })
  @Prop({ required: true })
  tools: string[];

  @ApiProperty({
    example: [
      'https://res.cloudinary.com/drjyg98uv/image/upload/v1682094499/portfolio/task-app.png',
      'https://res.cloudinary.com/drjyg98uv/image/upload/v1682094499/portfolio/task-app.png',
    ],
  })
  @Prop({ required: true })
  images: string[];

  @ApiProperty({ example: 'https://final-project-one-beta.vercel.app/' })
  @Prop({ required: true })
  demo: string;

  @ApiProperty({ example: 'https://github.com/Angela-GM/final-project' })
  @Prop({ required: true })
  repo: string;

  @ApiProperty({ example: 'Frontend | Backend | Fullstack' })
  @Prop({ required: true })
  category: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
