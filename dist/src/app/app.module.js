"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("../features/user/user.module");
const config_1 = require("@nestjs/config");
const shared_module_1 = require("../shared/shared/shared.module");
const typeorm_1 = require("@nestjs/typeorm");
const http_filter_1 = require("../shared/filter/http.filter");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const axios_1 = require("@nestjs/axios");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            axios_1.HttpModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    maxRedirects: configService.get('MAX_REDIRECTS', 4),
                })
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST', 'localhost'),
                    username: configService.get('DB_USERNAME', ''),
                    port: configService.get('DB_PORT', 5432),
                    password: configService.get('DB_PASSWORD', 'prism'),
                    database: 'postgres',
                    entities: ['dist/src/shared/entity/*.entity.{js,ts}'],
                    logging: ['error'],
                }),
            }),
            shared_module_1.SharedModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_filter_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map