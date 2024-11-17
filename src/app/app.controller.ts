import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService } from "./app.service";
import { VideoDto } from "../shared/dto/video-dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
