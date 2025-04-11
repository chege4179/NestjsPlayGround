import { Injectable } from "@nestjs/common";
import { InjectRedis } from "@nestjs-modules/ioredis";
import Redis from "ioredis";

@Injectable()
export class AppService {
  constructor(
    @InjectRedis()
    private readonly redisClient: Redis
  ) {
  }
  
  async ping() {
    return "pong";
  }
  
  async helloWorld() {
    await this.redisClient.set("name","Peterj")
    return `Hello World! `;
  }
}
