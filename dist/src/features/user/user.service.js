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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../shared/entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(dto) {
        try {
            const newUser = await this.userRepository.save({
                email: dto.email,
                name: dto.name,
            });
            return {
                newUser,
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new common_1.BadRequestException("An unexpected error has occurred");
        }
    }
    async getAllUsers() {
        try {
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new common_1.BadRequestException("An unexpected error has occurred");
        }
    }
    async deleteUserById(id) {
        try {
            return {
                msg: "Deleted successfully",
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new common_1.BadRequestException("An unexpected error has occurred");
        }
    }
    async updateUserById(id, payload) {
        try {
            return {
                msg: "Updated successfully",
            };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message ? e.message : e);
        }
    }
    async findUsers() {
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map