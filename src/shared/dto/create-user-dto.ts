import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {
     @ApiProperty()
     @IsEmail()
     @IsNotEmpty()
     email:string;

     @ApiProperty()
     @IsString()
     @IsNotEmpty()
     name:string;
}
