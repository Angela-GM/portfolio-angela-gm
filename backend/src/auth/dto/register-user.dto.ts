import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ example: 'Angela' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Garcia' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ example: 'angela@garcia.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  password: string;
}
