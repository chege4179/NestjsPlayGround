"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const typeorm_1 = require("typeorm");
const image_entity_1 = require("../../shared/entity/image.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
let ImageService = class ImageService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async createImage(file) {
        common_1.Logger.log(`File >>> ${file}`);
        const imageBase64 = file.buffer.toString("base64");
        const imageEntity = new image_entity_1.ImageEntity();
        imageEntity.imageBase64 = imageBase64;
        const newImage = await this.imageRepository.save(imageEntity);
        return {
            newImage
        };
    }
    async getImageById(id) {
        try {
            const image = await this.imageRepository.findOne({
                where: { id: id },
            });
            if (image) {
                const imageBase64 = image.imageBase64;
                const imageBuffer = Buffer.from(imageBase64, "base64");
                return imageBuffer;
            }
            else {
                throw new common_1.BadRequestException("Image Not Found");
            }
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new common_1.BadRequestException(error);
        }
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(image_entity_1.ImageEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map