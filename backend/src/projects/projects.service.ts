import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as data from 'data/projects.json';

@Injectable()
export class ProjectsService {
  // protptype(prototype: any, arg1: string) {
  //   throw new Error('Method not implemented.');
  // }
  // constructor(
  //   private readonly projectsService: ProjectsService,
  //   @InjectModel(Project.name) private projectModel: Model<Project>,
  // ) {}
  // create(createProjectDto: CreateProjectDto) {
  //   return 'This action adds a new project';
  // }

  findAll() {
    return data;
    // return this.projectModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} project`;
  // }

  // update(id: number, updateProjectDto: UpdateProjectDto) {
  //   return `This action updates a #${id} project`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} project`;
  // }
}
