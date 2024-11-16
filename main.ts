import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app/app.module";
import { Logger, ValidationPipe } from "@nestjs/common";
import { json } from "express";
import { LoggingInterceptor } from "./src/shared/interceptor/logging.interceptor";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );
  app.use(json({ limit: "50mb" }));
    const config = new DocumentBuilder()
        .setTitle('Nest Js Playground API')
        .setDescription('Nest Js Playground description')
        .setVersion('1.0')
        .addTag('playground')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  await app.listen(port);
}

bootstrap()
  .then(() => {
    Logger.log(
      `🚀 🚀🚀🚀 API Service running at port ${port}`,
      "Bootstrapping"
    );
  })
  .catch((err) => {
    Logger.error(
      `Failed to start API service on port ${port}`,
      "Bootstrapping"
    );
  });
