import { Injectable } from "@nestjs/common";
import { User,Bookmark } from "@prisma/client"
@Injectable({

})
export class AuthService{
     signIn(){
          return {
               msg:"I have signed up"
          }

     }
     signUp(){
          return {
               msg:"I have signedffff up"
          }
     }

}
