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
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const PDFDocument = require("pdfkit");
let PdfService = class PdfService {
    constructor() { }
    async createPdf() {
        try {
            const doc = this.generatePDF();
            const buffers = await this.generatePDFToBytes(doc);
            return buffers;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new common_1.BadRequestException("An unexpected error has occurred");
        }
    }
    generatePDF() {
        const doc = new PDFDocument();
        doc
            .fontSize(25)
            .text('Some text with an embedded font!', 100, 100);
        doc
            .addPage()
            .fontSize(25)
            .text('Here is some vector graphics...', 100, 100);
        doc
            .save()
            .moveTo(100, 150)
            .lineTo(100, 250)
            .lineTo(200, 250)
            .fill('#FF3300');
        doc
            .scale(0.6)
            .translate(470, -380)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();
        doc
            .addPage()
            .fillColor('blue')
            .text('Here is a link sksksks!', 100, 100)
            .underline(100, 100, 160, 27, { color: '#0000FF' })
            .link(100, 100, 160, 27, 'http://google.com/');
        return doc;
    }
    async generatePDFToBytes(pdfDoc) {
        return new Promise((resolve, reject) => {
            const chunks = [];
            pdfDoc.on('data', (chunk) => {
                chunks.push(chunk);
            });
            pdfDoc.on('end', () => {
                const pdfBuffer = Buffer.concat(chunks);
                resolve(pdfBuffer);
            });
            pdfDoc.on('error', (err) => {
                reject(err);
            });
            pdfDoc.end();
        });
    }
};
PdfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PdfService);
exports.PdfService = PdfService;
//# sourceMappingURL=pdf.service.js.map