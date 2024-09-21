import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from '../../shared/dto/auth.dto';


@Controller("auth")
export class AuthController {
     constructor(private authService: AuthService) {

     }

     @HttpCode(201)
     @Post("signup")
     signUp(
          @Body() dto:AuthDto,
     ){
          console.log(dto);
          return this.authService.signUp(dto)

     }

     @HttpCode(201)
     @Post("signin")
     signIn(
          @Body() dto:AuthDto,
     ){
          return this.authService.signIn(dto)
     }

}
