import {Controller, Get, HttpCode, HttpStatus, Res} from "@nestjs/common";
import {PdfService} from "./pdf.service";
import { Response } from 'express';

@Controller("pdf")
export class PdfController {
    constructor(
        private readonly pdfService: PdfService,
    ) {
    }

    @HttpCode(HttpStatus.OK)
    @Get("create")
    async createPdf(
        @Res() response: Response,
    ): Promise<any> {
        const data = await this.pdfService.createPdf()
        response.setHeader('Content-Description', 'File Transfer');
        response.setHeader('Content-type', 'application/octet-stream');
        response.setHeader('Content-type', 'application/pdf');
        response.setHeader('Content-Type', 'application/force-download');
        response.setHeader('Content-disposition', 'attachment;filename=report.pdf');
        response.send(data);

    }


}