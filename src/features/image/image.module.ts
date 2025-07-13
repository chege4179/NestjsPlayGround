import { Module } from "@nestjs/common";
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";
import { SharedModule } from "../../shared/shared/shared.module";

@Module({
  imports: [SharedModule],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {
}
