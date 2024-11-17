import {Controller, Get, HttpCode, HttpStatus} from '@nestjs/common';
import {AppService} from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @HttpCode(HttpStatus.OK)
    @Get("ping")
    async getHello(): Promise<any> {
        return await this.appService.ping();
    }

    @HttpCode(HttpStatus.OK)
    @Get("")
    async helloWorld() {
        return await this.appService.helloWorld();
    }

}
