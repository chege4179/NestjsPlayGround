import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import * as PDFDocument from 'pdfkit';
@Injectable()
export class PdfService {
    constructor() {}

    async createPdf(): Promise<any> {
        try {
            const doc = this.generatePDF()
            const buffers = await this.generatePDFToBytes(doc)
            return buffers
        } catch (error) {
            Logger.error(error);
            throw new BadRequestException("An unexpected error has occurred");
        }
    }

    generatePDF():PDFKit.PDFDocument {
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
            .underline(100, 100, 160, 27, {color: '#0000FF'})
            .link(100, 100, 160, 27, 'http://google.com/');
        return doc
    }

    async generatePDFToBytes(pdfDoc: PDFKit.PDFDocument): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            const chunks: Buffer[] = [];

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
}
