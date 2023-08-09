import { PartialType } from '@nestjs/swagger';
import { CreateAngelaDto } from './create-angela.dto';

export class UpdateAngelaDto extends PartialType(CreateAngelaDto) {}
