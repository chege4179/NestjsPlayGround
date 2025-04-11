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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
    }
    async createUser(dto) {
        try {
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
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map