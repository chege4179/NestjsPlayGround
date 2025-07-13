import {Module} from "@nestjs/common";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {HttpModule} from "@nestjs/axios";
import {RedisModule} from "@nestjs-modules/ioredis";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ImageEntity} from "../entity/image.entity";
import {UserEntity} from "../entity/user.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        HttpModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                maxRedirects: configService.get<number>("MAX_REDIRECTS", 4)
            })
        }),
        
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                const dbUrl = configService.get<string>("DATABASE_URL");
                const environment = configService.get<string>("NODE_ENV");
                return {
                    type: "mysql",
                    url: dbUrl,
                    synchronize: true,
                    entities: ["dist/src/shared/entity/*.entity.{js,ts}"],
                    logging: ["error"]
                };
            }
        }),
        TypeOrmModule.forFeature([ImageEntity, UserEntity])
        
        
    ],
    exports: [
        HttpModule,
        TypeOrmModule,
    ]
})
export class SharedModule {
}
