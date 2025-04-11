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
import {PdfModule} from "../features/pdf/pdf.module";

@Module({
    imports: [
        UserModule,
        PdfModule,
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
