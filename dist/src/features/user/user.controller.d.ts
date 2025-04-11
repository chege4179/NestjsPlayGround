import { UserService } from './user.service';
import { CreateUserDto } from '../../shared/dto/create-user-dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(payload: CreateUserDto): Promise<any>;
    getAllUsers(): Promise<void>;
    dummyEndpoint(): Promise<void>;
    deleteUser(id: number): Promise<{
        msg: string;
    }>;
    updateUserById(id: number, payload: CreateUserDto): Promise<{
        msg: string;
    }>;
}
