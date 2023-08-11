import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  IsArray,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsObject,
} from 'class-validator';
import { Languages, Skills } from './project.model';

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

  @ApiProperty({
    example: [
      { programmingLang: ['JavaScript', 'TypeScript'], frameworks: ['React'] },
      // ... otros ejemplos ...
    ],
  })
  @IsObject()
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
  @IsObject()
  languages: Languages;

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
