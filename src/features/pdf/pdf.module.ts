import {Module} from "@nestjs/common";
import {PdfService} from "./pdf.service";
import {PdfController} from "./pdf.controller";

@Module({
    imports: [],
    controllers: [PdfController],
    providers: [PdfService],
})
export class PdfModule {
}
