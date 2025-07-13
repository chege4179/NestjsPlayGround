import { InjectRedis } from "@nestjs-modules/ioredis";
import { Injectable } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class AppService {
  constructor(
  ) {
  }
  
  async ping() {
    
    return `pong `;
  }
  
  async helloWorld() {
    const template = "Dear {name}. Your Age is {age}"
    return template
      .replace(/{name}/g, 'Peter',)
      .replace(/{age}/g,"200000")
  }
}
