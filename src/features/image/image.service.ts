import {Repository} from "typeorm";
import {ImageEntity} from "../../shared/entity/image.entity";
import {BadRequestException, Injectable, Logger, Param} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(ImageEntity)
        private readonly imageRepository: Repository<ImageEntity>
    ) {
    }
    
    
    async createImage(file: Express.Multer.File) {
        Logger.log(`File >>> ${file}`)
        const imageBase64 = file.buffer.toString("base64");
        const imageEntity = new ImageEntity();
        imageEntity.imageBase64 = imageBase64;
        const newImage = await this.imageRepository.save(imageEntity);
        return {
            newImage
        }
    }
    
    async getImageById(id: number) {
        try {
            const image = await this.imageRepository.findOne({
                where: { id: id },
            })
            if (image) {
                const imageBase64 = image.imageBase64
                
                
                const imageBuffer = Buffer.from(imageBase64, "base64");
                return imageBuffer
            }else {
                throw new BadRequestException("Image Not Found")
            }
        } catch (error) {
            Logger.error(error)
            throw new BadRequestException(error)
        }
    }
}