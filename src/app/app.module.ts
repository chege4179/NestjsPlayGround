import {Module} from '@nestjs/common';
import {UserModule} from '../features/user/user.module';
import {SharedModule} from '../shared/shared/shared.module';
import {HttpExceptionFilter} from '../shared/filter/http.filter';
import {APP_FILTER} from '@nestjs/core';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PdfModule} from "../features/pdf/pdf.module";
import {ImageModule} from "../features/image/image.module";

@Module({
    imports: [
        UserModule,
        PdfModule,
        ImageModule,
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
