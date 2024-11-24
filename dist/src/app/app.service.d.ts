import { HttpService } from "@nestjs/axios";
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    ping(): Promise<string>;
    helloWorld(): Promise<string>;
}
