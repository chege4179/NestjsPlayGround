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
exports.PdfController = void 0;
const common_1 = require("@nestjs/common");
const pdf_service_1 = require("./pdf.service");
let PdfController = class PdfController {
    constructor(pdfService) {
        this.pdfService = pdfService;
    }
    async createPdf(name, response) {
        const data = await this.pdfService.createPdf();
        response.setHeader('Content-disposition', `attachment;filename=${name}.pdf`);
        response.send(data);
    }
};
__decorate([
    (0, common_1.Header)("Content-Description", "File Transfer"),
    (0, common_1.Header)("Content-Type", "application/pdf"),
    (0, common_1.Header)("Content-Type", "application/octet-stream"),
    (0, common_1.Header)("Content-Type", 'application/force-download'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)("create/:name"),
    __param(0, (0, common_1.Param)("name")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "createPdf", null);
PdfController = __decorate([
    (0, common_1.Controller)("pdf"),
    __metadata("design:paramtypes", [pdf_service_1.PdfService])
], PdfController);
exports.PdfController = PdfController;
//# sourceMappingURL=pdf.controller.js.map