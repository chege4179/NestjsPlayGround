import {BadRequestException, Injectable, Logger,} from "@nestjs/common";
import {CreateUserDto} from "../../shared/dto/create-user-dto";
import {UserEntity} from "../../shared/entity/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

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
            throw new BadRequestException("An unexpected error has occurred");
        }
    }

    async getAllUsers() {
        try {
            // const allUsers = await this.userRepository.find();
            // return {
            //     users: allUsers,
            // };
        } catch (error) {
            Logger.error(error);
            throw new BadRequestException("An unexpected error has occurred");
        }
    }

    async deleteUserById(id: number) {
        try {
            // await this.userRepository
            //     .createQueryBuilder()
            //     .delete()
            //     .from(UserEntity)
            //     .where("id = :id", {id: id})
            //     .execute();
            return {
                msg: "Deleted successfully",
            };
        } catch (error) {
            Logger.error(error);
            throw new BadRequestException("An unexpected error has occurred");
        }
    }

    async updateUserById(id: number, payload: CreateUserDto) {
        try {
            // await this.userRepository.update(
            //     {id: id},
            //     {...payload}
            // );
            // const updatedUser = await this.userRepository.findOne({
            //     where: {id: id},
            // });
            return {
                msg: "Updated successfully",
                // updatedUser,
            };
        } catch (e) {
            throw new BadRequestException(e.message ? e.message : e);
        }
    }

    async findUsers() {
        // const [users, count] = await this.userRepository.findAndCountBy({email: "peterkagure@gmail.com"})
        // return {users, count}
    }
}
