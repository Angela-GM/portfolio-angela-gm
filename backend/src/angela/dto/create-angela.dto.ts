import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';

enum Category {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Fullstack = 'Fullstack',
}

class Skills {
  @ApiProperty({
    example: [
      {
        programmingLang: ['JavaScript', 'TypeScript'],
        frameworks: ['React', 'Vue.js 3', 'Nest.js'],
        libraries: ['Bootstrap', 'Tailwind CSS', 'Styled Components'],
        backend: ['Node.js', 'Nest.js'],
        databases: ['MongoDB', 'MySQL'],
        testing: ['Jest', 'Vitest'],
        tools: ['Git', 'GitHub', 'Postman', 'VS Code'],
      },
    ],
  })
  @IsArray()
  programmingLang: string[];

  @ApiProperty({ example: ['React', 'Vue.js 3', 'Nest.js'] })
  @IsArray()
  frameworks: string[];

  @ApiProperty({ example: ['Bootstrap', 'Tailwind CSS', 'Styled Components'] })
  @IsArray()
  libraries: string[];

  @ApiProperty({ example: ['Node.js', 'Nest.js'] })
  @IsArray()
  backend: string[];

  @ApiProperty({ example: ['MongoDB', 'MySQL'] })
  @IsArray()
  databases: string[];

  @ApiProperty({ example: ['Jest', 'Vitest'] })
  @IsArray()
  testing: string[];

  @ApiProperty({
    example: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Figma',
      'vite',
      'npm',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe XD',
      'Thunder Client',
      'JWT',
      'Netlify',
      'Vercel',
      'Docker',
    ],
  })
  @IsArray()
  tools: string[];

  @ApiProperty({
    example: [
      'SCRUM',
      'Agile',
      'Trello',
      'MVC',
      'REST API',
      'SEO',
      'UX/UI',
      'clean code',
      'responsive design',
      'SOLID',
      'TDD',
      'BEM',
      'OOP',
      'CI/CD',
      'apiRest',
    ],
  })
  @IsArray()
  others: string[];
}

export class CreateAngelaDto {
  @ApiProperty({ example: 'Angela' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Garcia' })
  @IsString()
  @IsNotEmpty()
  surname: string;

  @ApiProperty({
    example: [
      {
        type: 'email',
        value: 'angelagm0112@gmail.com',
      },
      // ... otros ejemplos ...
    ],
  })
  @IsArray()
  @IsObject({ each: true })
  contact: { type: string; value: string }[];

  @ApiProperty({ example: 'Soy una Desarrolladora FullStack apasionada ...' })
  @IsString()
  aboutme: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/drjyg98uv/image/upload/v1691592903/portfolio/bgfcmhsrfwoajh94kebv.png',
  })
  @IsString()
  photo: string;

  @ApiProperty({ type: Skills })
  @IsObject()
  skills: Skills;

  @ApiProperty({
    example: {
      spanish: 'nativo',
      english: 'A1',
      catalan: 'bilingüe',
    },
  })
  @IsObject()
  languages: {
    spanish: string;
    english: string;
    catalan: string;
  };

  @ApiProperty({ example: 'Frontend | Backend | Fullstack' })
  @IsString()
  @IsEnum(Category)
  @IsNotEmpty()
  category: string;
}
