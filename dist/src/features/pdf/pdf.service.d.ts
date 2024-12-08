/// <reference types="pdfkit" />
/// <reference types="node" />
export declare class PdfService {
    constructor();
    createPdf(): Promise<any>;
    generatePDF(): PDFKit.PDFDocument;
    generatePDFToBytes(pdfDoc: PDFKit.PDFDocument): Promise<Buffer>;
}
