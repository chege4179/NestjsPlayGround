import { CreateUserDto } from "../../shared/dto/create-user-dto";
import { UserEntity } from "../../shared/entity/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(dto: CreateUserDto): Promise<any>;
    getAllUsers(): Promise<void>;
    deleteUserById(id: number): Promise<{
        msg: string;
    }>;
    updateUserById(id: number, payload: CreateUserDto): Promise<{
        msg: string;
    }>;
    findUsers(): Promise<void>;
}
