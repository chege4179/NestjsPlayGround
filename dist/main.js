"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app/app.module");
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const logging_interceptor_1 = require("./src/shared/interceptor/logging.interceptor");
const swagger_1 = require("@nestjs/swagger");
const port = process.env.PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.use((0, express_1.json)({ limit: '50mb' }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nest Js Playground API')
        .setDescription('Nest Js Playground description')
        .setVersion('1.0')
        .addTag('playground')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(port);
}
bootstrap()
    .then(() => {
    common_1.Logger.log(`🚀 🚀🚀🚀 API Service running at port ${port}`, 'Bootstrapping');
})
    .catch((err) => {
    common_1.Logger.error(`Failed to start API service on port ${port}`, 'Bootstrapping');
});
//# sourceMappingURL=main.js.map