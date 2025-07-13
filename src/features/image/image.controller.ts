import {Controller, Get, Param, ParseIntPipe, Post, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ImageService} from "./image.service";
import {FileInterceptor} from "@nestjs/platform-express";
import { Response } from 'express';

@Controller("image")
export class ImageController {
    constructor(private readonly imageService: ImageService) {
    }
    
    
    @Get("single/:id")
    async getImageById(
        @Res() response: Response,
        @Param('id', new ParseIntPipe()) id: number
    ) {
        const imageData = await this.imageService.getImageById(id);
        response.setHeader('Content-Description', 'File Transfer');
        response.setHeader('Content-type', 'image/jpeg');
        response.send(imageData)
    }
    
    @UseInterceptors(FileInterceptor('image'))
    @Post("/create")
    async createImage(@UploadedFile() file: Express.Multer.File) {
        return await this.imageService.createImage(file);
    }
}