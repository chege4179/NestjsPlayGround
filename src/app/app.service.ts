import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { VideoDto } from "../shared/dto/video-dto";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async ping() {
    return "pong";
  }

  async helloWorld() {
    return `Hello World!`;
  }
}
