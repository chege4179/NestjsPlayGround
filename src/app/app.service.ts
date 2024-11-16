

import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AppService {
    constructor(
        private readonly configService: ConfigService,
    ) {
    }

    async ping() {
        return 'pong';
    }

    async helloWorld() {
        return `Hello World!`;
    }

}
