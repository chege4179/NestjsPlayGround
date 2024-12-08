import {Controller, Get, HttpCode, HttpStatus, Param, Res,Header} from "@nestjs/common";
import {PdfService} from "./pdf.service";
import {Response} from 'express';

@Controller("pdf")
export class PdfController {
    constructor(
        private readonly pdfService: PdfService,
    ) {
    }

    @Header("Content-Description", "File Transfer")
    @Header("Content-Type", "application/pdf")
    @Header("Content-Type", "application/octet-stream")
    @Header("Content-Type",'application/force-download')
    @HttpCode(HttpStatus.OK)
    @Get("create/:name")
    async createPdf(

        @Param("name") name: String,
        @Res() response: Response,
    ): Promise<any> {
        const data = await this.pdfService.createPdf()
        response.setHeader('Content-disposition', `attachment;filename=${name}.pdf`);
        response.send(data);

    }


}