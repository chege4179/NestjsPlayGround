import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import * as process from 'node:process';

async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     const port = process.env.PORT
     app.useGlobalPipes(new ValidationPipe({
          whitelist: true
     }));
     app.use(json({ limit: '50mb' }));
     app.use(urlencoded({ limit: '50mb' }));
     await app.listen(port);
     Logger.log(`🚀 🚀🚀🚀 API Service running at port ${port}`, 'Bootstrapping');

}

bootstrap();
