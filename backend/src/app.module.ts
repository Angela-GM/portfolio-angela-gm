import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AngelaModule } from './angela/angela.module';

@Module({
  imports: [ProjectsModule, AngelaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
