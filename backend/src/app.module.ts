import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AngelaModule } from './angela/angela.module';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
dotenv.config();
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    ProjectsModule,
    AngelaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
