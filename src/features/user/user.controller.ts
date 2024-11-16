import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "../../shared/dto/create-user-dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(201)
  @Post("create")
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get("all")
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get("delete/:id")
  deleteUser(@Param("id", new ParseIntPipe()) id: number) {
    return this.userService.deleteUserById(id);
  }
}
