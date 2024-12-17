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
        doc.fontSize(25).text('Here is some vector graphics...', 100, 80);

// some vector graphics
        doc
            .save()
            .moveTo(100, 150)
            .lineTo(100, 250)
            .lineTo(200, 250)
            .fill('#FF3300');

        doc.circle(280, 200, 50).fill('#6600FF');

// an SVG path
        doc
            .scale(0.6)
            .translate(470, 130)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();

// and some justified text wrapped into columns
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


const lorem = "What is Lorem Ipsum?\n" +
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
    "\n" +
    "Why do we use it?\n" +
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."