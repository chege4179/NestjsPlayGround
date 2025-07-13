/// <reference types="multer" />
/// <reference types="node" />
import { Repository } from "typeorm";
import { ImageEntity } from "../../shared/entity/image.entity";
export declare class ImageService {
    private readonly imageRepository;
    constructor(imageRepository: Repository<ImageEntity>);
    createImage(file: Express.Multer.File): Promise<{
        newImage: ImageEntity;
    }>;
    getImageById(id: number): Promise<Buffer>;
}
