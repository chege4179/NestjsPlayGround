import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../shared/dto/create-user-dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('create')
    createUser(@Body() payload: CreateUserDto) {
        return this.userService.createUser(payload);
    }

    @HttpCode(HttpStatus.OK)
    @Get('all')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @HttpCode(HttpStatus.OK)
    @Get('delete/:id')
    deleteUser(@Param('id', new ParseIntPipe()) id: number) {
        return this.userService.deleteUserById(id);
    }

    @HttpCode(HttpStatus.OK)
    @Put('update/:id')
    updateUserById(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() payload: CreateUserDto,
    ) {
        return this.userService.updateUserById(id, payload);
    }
}
