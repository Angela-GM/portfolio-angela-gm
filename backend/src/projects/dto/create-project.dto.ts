import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  IsArray,
  IsNotEmpty,
  IsString,
  IsEnum,
} from 'class-validator';

enum Category {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Fullstack = 'Fullstack',
}

export class CreateProjectDto {
  @ApiProperty({ example: 'Project name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Project description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: ['JavaScript', 'HTML', 'CSS'] })
  @IsArray()
  programmingLang: string[];

  @ApiProperty({ example: ['Vue.js'] })
  @IsArray()
  frameworks: string[];

  @ApiProperty({ example: ['Bootstrap', 'Tailwind CSS', 'Styled Components'] })
  @IsArray()
  libraries: string[];

  @ApiProperty({ example: ['Node.js', 'Nest.js'] })
  @IsArray()
  backend: string[];

  @ApiProperty({ example: ['MongoDB'] })
  @IsArray()
  databases: string[];

  @ApiProperty({ example: ['Vitest'] })
  @IsArray()
  testing: string[];

  @ApiProperty({ example: ['Git', 'GitHub', 'Postman'] })
  @IsArray()
  tools: string[];

  @ApiProperty({
    example: ['SCRUM', 'Agile', 'Trello', 'MVC', 'REST API', 'SEO', 'UX/UI'],
  })
  @IsArray()
  others: string[];

  @ApiProperty({
    example: [
      'https://res.cloudinary.com/drjyg98uv/image/upload/v1682094507/portfolio/midtern.png',
    ],
  })
  @IsString()
  images: string[];

  @ApiProperty({ example: 'https://midterm-ironhack-red.vercel.app/' })
  @IsString()
  demo: string;

  @ApiProperty({ example: 'https://github.com/Angela-GM/midterm-ironhack' })
  @IsString()
  repo: string;

  @ApiProperty({ example: 'Frontend | Backend | Fullstack' })
  @IsString()
  @IsEnum(Category)
  @IsNotEmpty()
  category: string;
}
