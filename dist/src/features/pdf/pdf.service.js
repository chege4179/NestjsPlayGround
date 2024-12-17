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
        doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
        doc
            .save()
            .moveTo(100, 150)
            .lineTo(100, 250)
            .lineTo(200, 250)
            .fill('#FF3300');
        doc.circle(280, 200, 50).fill('#6600FF');
        doc
            .scale(0.6)
            .translate(470, 130)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();
        doc
            .text('And here is some wrapped text...', 100, 300)
            .font('Times-Roman', 13)
            .moveDown()
            .text(lorem, {
            width: 412,
            align: 'justify',
            indent: 30,
            columns: 2,
            height: 300,
            ellipsis: true
        });
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
const lorem = "What is Lorem Ipsum?\n" +
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
    "\n" +
    "Why do we use it?\n" +
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
//# sourceMappingURL=pdf.service.js.map