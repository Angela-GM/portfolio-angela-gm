import { Injectable } from '@nestjs/common';
import { CreateAngelaDto } from './dto/create-angela.dto';
import { UpdateAngelaDto } from './dto/update-angela.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Angela } from './schemas/angela.schema';
// import { AngelaSkill } from './angela.skill.interface';
// import { AngelaSkill } from './schemas/angela-skill.schema';

@Injectable()
export class AngelaService {
  constructor(@InjectModel(Angela.name) private angelaModel: Model<Angela>) {}
  // async create(createAngelaDto: CreateAngelaDto): Promise<Angela> {
  //   // return 'This action adds a new angela';
  //   try {
  //     const createdAngela = new this.angelaModel(createAngelaDto);
  //     return await createdAngela.save();
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async findAll() {
    return await this.angelaModel.find().exec();
  }

  async findOne(id: ObjectId) {
    try {
      const angela = await this.angelaModel.findById(id);
      console.log(angela);
      return angela;
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateAngelaDto: UpdateAngelaDto) {
    return `This action updates a #${id} angela`;
  }

  remove(id: number) {
    return `This action removes a #${id} angela`;
  }
}
