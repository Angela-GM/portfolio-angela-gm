import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AngelaService } from './angela.service';
import { CreateAngelaDto } from './dto/create-angela.dto';
import { UpdateAngelaDto } from './dto/update-angela.dto';

@Controller('angela')
export class AngelaController {
  constructor(private readonly angelaService: AngelaService) {}

  @Post()
  create(@Body() createAngelaDto: CreateAngelaDto) {
    return this.angelaService.create(createAngelaDto);
  }

  @Get()
  findAll() {
    return this.angelaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.angelaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAngelaDto: UpdateAngelaDto) {
    return this.angelaService.update(+id, updateAngelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.angelaService.remove(+id);
  }
}
