import Redis from "ioredis";
export declare class AppService {
    private readonly redisClient;
    constructor(redisClient: Redis);
    ping(): Promise<string>;
    helloWorld(): Promise<string>;
}
