import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RedisModule } from "@nestjs-modules/ioredis";

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
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => {
    //     return {
    //       type: "postgres",
    //       host: configService.get("DB_HOST", "localhost"),
    //       username: configService.get("DB_USERNAME", ""),
    //       port: configService.get<number>("DB_PORT", 5432),
    //       password: configService.get("DB_PASSWORD", "prism"),
    //       database: "postgres",
    //       entities: ["dist/src/shared/entity/*.entity.{js,ts}"],
    //       logging: configService.get("LOGGING_LEVELS").split(",")
    //     };
    //   }
    // }),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: "single",
          url: configService.getOrThrow("REDIS_URL")
        };
      }
      
    })
  ],
  exports: [
    // TypeOrmModule,
    HttpModule,
    RedisModule
  ]
})
export class SharedModule {
}
