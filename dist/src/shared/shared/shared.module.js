"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SharedModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const image_entity_1 = require("../entity/image.entity");
const user_entity_1 = require("../entity/user.entity");
let SharedModule = SharedModule_1 = class SharedModule {
};
SharedModule = SharedModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            axios_1.HttpModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    maxRedirects: configService.get("MAX_REDIRECTS", 4)
                })
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [SharedModule_1],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const dbUrl = configService.get("DATABASE_URL");
                    const environment = configService.get("NODE_ENV");
                    return {
                        type: "mysql",
                        url: dbUrl,
                        synchronize: true,
                        entities: ["dist/src/shared/entity/*.entity.{js,ts}"],
                        logging: ["error"]
                    };
                }
            }),
            typeorm_1.TypeOrmModule.forFeature([image_entity_1.ImageEntity, user_entity_1.UserEntity])
        ],
        exports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule,
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map