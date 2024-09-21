import {
  BadRequestException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { AuthDto } from '../../shared/dto/auth.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService
  ) {}

  async signIn(dto: AuthDto):Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get("https://jsonplaceholder.typicode.com/posts")
      );
      return { data,dto };
    } catch (error) {
      Logger.error(error);
      throw new BadRequestException(error.response);
    }
  }

  async signUp(dto: AuthDto) {
    try {
    } catch (error) {}
  }
}
