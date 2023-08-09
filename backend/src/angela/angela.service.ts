import { Injectable } from '@nestjs/common';
import { CreateAngelaDto } from './dto/create-angela.dto';
import { UpdateAngelaDto } from './dto/update-angela.dto';

@Injectable()
export class AngelaService {
  create(createAngelaDto: CreateAngelaDto) {
    return 'This action adds a new angela';
  }

  findAll() {
    return `This action returns all angela`;
  }

  findOne(id: number) {
    return `This action returns a #${id} angela`;
  }

  update(id: number, updateAngelaDto: UpdateAngelaDto) {
    return `This action updates a #${id} angela`;
  }

  remove(id: number) {
    return `This action removes a #${id} angela`;
  }
}
