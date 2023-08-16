import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { AngelaModule } from 'src/angela/angela.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Angela, AngelaSchema } from 'src/angela/schemas/angela.schema';
import { Project, ProjectSchema } from './schemas/project.schema';
import { JwtModule } from '@nestjs/jwt'; // Asegúrate de importar JwtModule
@Module({
  imports: [
    JwtModule.register({ secret: process.env.SECRET }), // Configura JwtModule aquí
    AngelaModule,
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]), // Registra el modelo Project aquí
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
