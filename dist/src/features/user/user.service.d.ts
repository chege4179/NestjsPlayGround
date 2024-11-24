import { CreateUserDto } from "../../shared/dto/create-user-dto";
import { Repository } from "typeorm";
import { UserEntity } from "../../shared/entity/user.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(dto: CreateUserDto): Promise<any>;
    getAllUsers(): Promise<{
        users: UserEntity[];
    }>;
    deleteUserById(id: number): Promise<{
        msg: string;
    }>;
    updateUserById(id: number, payload: CreateUserDto): Promise<{
        msg: string;
        updatedUser: UserEntity;
    }>;
    findUsers(): Promise<{
        users: UserEntity[];
        count: number;
    }>;
}
