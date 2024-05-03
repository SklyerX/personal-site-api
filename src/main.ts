import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  require('dotenv').config();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: "https://skylerx.ir",
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: "*"
  });
  await app.listen(3000);
}
bootstrap();
