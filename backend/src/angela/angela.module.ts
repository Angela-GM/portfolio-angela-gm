import { Module } from '@nestjs/common';
import { AngelaService } from './angela.service';
import { AngelaController } from './angela.controller';

@Module({
  controllers: [AngelaController],
  providers: [AngelaService],
})
export class AngelaModule {}
