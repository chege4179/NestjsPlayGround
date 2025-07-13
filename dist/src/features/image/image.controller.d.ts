/// <reference types="multer" />
import { ImageService } from "./image.service";
import { Response } from 'express';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    getImageById(response: Response, id: number): Promise<void>;
    createImage(file: Express.Multer.File): Promise<{
        newImage: import("../../shared/entity/image.entity").ImageEntity;
    }>;
}
