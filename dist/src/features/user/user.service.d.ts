import { CreateUserDto } from "../../shared/dto/create-user-dto";
export declare class UserService {
    constructor();
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
