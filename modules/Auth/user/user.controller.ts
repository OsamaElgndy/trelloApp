import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { forgotPasswordDto, loginUserDto  , registerUserDto} from './dto/create-user.dto';
import {  isexsistingEmail} from './guards/isexistingEmail';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("login")
  create(@Body() createUserDto: loginUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post("register")
  @UseGuards(isexsistingEmail)
  register(@Body() registerUserDto: registerUserDto) {
    return this.userService.createUser(registerUserDto);
  }

  @Post('verify/:token')
  findOne(@Param('token') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('forgot-password')
  update( @Body() updateUserDto: forgotPasswordDto) {
    return this.userService.update( updateUserDto);
  }

  @Post('change-password')
  remove(@Body() changePasswordDto: forgotPasswordDto) {
    return this.userService.remove();
  }
}
