import { Module } from '@nestjs/common';
import { AngelaService } from './angela.service';
import { AngelaController } from './angela.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Angela, AngelaSchema } from './schemas/angela.schema';

@Module({
  // imports: [
  //   MongooseModule.forFeature([
  //     { name: AngelaSkill.name, schema: AngelaSkillSchema },
  //   ]),
  // ],
  imports: [
    MongooseModule.forFeature([{ name: Angela.name, schema: AngelaSchema }]),
  ],

  controllers: [AngelaController],
  providers: [AngelaService],
})
export class AngelaModule {}
