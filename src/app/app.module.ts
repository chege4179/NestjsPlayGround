import {Module} from '@nestjs/common';
import {UserModule} from '../features/user/user.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {SharedModule} from '../shared/shared/shared.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {HttpExceptionFilter} from '../shared/filter/http.filter';
import {APP_FILTER} from '@nestjs/core';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {HttpModule} from '@nestjs/axios';

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        HttpModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                maxRedirects: configService.get<number>('MAX_REDIRECTS', 4),
            })
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST', 'localhost'),
                username: configService.get('DB_USERNAME', ''),
                port: configService.get<number>('DB_PORT', 5432),
                password: configService.get('DB_PASSWORD', 'prism'),
                database: 'postgres',
                entities: ['dist/src/shared/entity/*.entity.{js,ts}'],
                logging: ['error'],
            }),
        }),
        SharedModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ],
})
export class AppModule {
}
