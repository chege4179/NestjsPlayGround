import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';


export class VideoDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsUrl()
    url: string;
}