import { Injectable } from '@nestjs/common';
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient{
     constructor() {
          super({
               datasources:{
                    db:{
                         url:"postgresql://postgres:totalman@localhost:5432/nestjstutorial?schema=public"
                    }
               }
          });

     }


}
