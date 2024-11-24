import { UserService } from './user.service';
import { CreateUserDto } from '../../shared/dto/create-user-dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(payload: CreateUserDto): Promise<any>;
    getAllUsers(): Promise<{
        users: import("../../shared/entity/user.entity").UserEntity[];
    }>;
    dummyEndpoint(): Promise<{
        users: import("../../shared/entity/user.entity").UserEntity[];
        count: number;
    }>;
    deleteUser(id: number): Promise<{
        msg: string;
    }>;
    updateUserById(id: number, payload: CreateUserDto): Promise<{
        msg: string;
        updatedUser: import("../../shared/entity/user.entity").UserEntity;
    }>;
}
