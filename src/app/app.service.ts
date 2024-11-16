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

  async getVideoUrl(payload: VideoDto) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<any>(payload.url).pipe(
          catchError((error: AxiosError) => {
            Logger.error(error);
            throw new BadRequestException(error.message);
          })
        )
      );
      return data;
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e);
    }
  }
}
