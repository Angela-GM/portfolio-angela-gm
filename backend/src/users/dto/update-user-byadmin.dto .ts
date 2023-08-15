import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateUserByAdminDto {
  @IsNotEmpty()
  @IsMongoId()
  _id: ObjectId;

  @ApiProperty({ example: 'jhon' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'connors' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ example: 'jhon.connor@judgmentday.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'user' })
  @IsString()
  profile: string;

  @ApiProperty({ example: 'no token los webs' })
  @IsString()
  recovery_token: string;
}
