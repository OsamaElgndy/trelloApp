import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { forgotPasswordDto, loginUserDto  , registerUserDto} from './dto/create-user.dto';
import {  isexsistingEmail} from './guards/isexistingEmail';
import {emailNotFound} from "./guards/emailNotFound"
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("login")
  @UseGuards(emailNotFound)
  create(@Body() createUserDto: loginUserDto) {
    return this.userService.loginUser(createUserDto);
  }

  @Post("register")
  @UseGuards(isexsistingEmail)
  register(@Body() registerUserDto: registerUserDto) {

    return this.userService.createUser(registerUserDto);
  }

  @Get('verify/:token')
  findOne(@Param('token') token: string) {
    return this.userService.verifyAccount(token);

  }

  @Post('forgot-password')
  @UseGuards(emailNotFound)
  update( @Body() forgotUserDto: forgotPasswordDto) {
    return this.userService.forgotPassword( forgotUserDto);
  }

  @Post('change-password')
  remove(@Body() changePasswordDto: forgotPasswordDto) {
    return this.userService.remove();
  }
}
