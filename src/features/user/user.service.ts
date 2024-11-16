import {
  BadRequestException,
  HttpStatus,
  Injectable,
  Logger,
} from "@nestjs/common";
import { CreateUserDto } from "../../shared/dto/create-user-dto";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../../shared/entity/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async createUser(dto: CreateUserDto): Promise<any> {
    try {
      const newUser = await this.userRepository.save({
        email: dto.email,
        name: dto.name,
      });
      return {
        newUser,
      };
    } catch (error) {
      Logger.error(error);
      throw new BadRequestException(error.response);
    }
  }

  async getAllUsers() {
    try {
      const allUsers = await this.userRepository.find();
      return {
        users: allUsers,
      };
    } catch (error) {}
  }

  async deleteUserById(id: number) {
    try {
      await this.userRepository
        .createQueryBuilder()
        .delete()
        .from(UserEntity)
        .where("id = :id", { id: id })
        .execute();
      return{
        msg:"Deleted successfully"
      }
    } catch (e) {
      throw new BadRequestException(e.message ? e.message : e);
    }
  }
}
