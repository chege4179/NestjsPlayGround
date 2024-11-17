import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class AppService {
    constructor(private readonly httpService: HttpService) {
    }

    async ping() {
        return "pong";
    }

    async helloWorld() {
        return `Hello World!`;
    }
}
