import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigModule } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  const options = new DocumentBuilder()
    .setTitle('Portfolio Angela API')
    .setDescription('Documentation of Portfolio Angela API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // Configuración del ENDPOINT de la documentación de la API en /docs
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
