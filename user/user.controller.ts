import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { changePasswordDto, forgotPasswordDto, loginUserDto, registerUserDto } from './dto/create-user.dto';
import { isexsistingEmail } from './guards/isexistingEmail';
import { emailNotFound } from "./guards/emailNotFound"
@Controller('auth/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('verify/:token')
  verify(@Param('token') token: string) {
    console.log(token ,"token");
    return this.userService.verifyAccount(token);
  }
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


  @Post('forgot-password')
  @UseGuards(emailNotFound)
  update(@Body() forgotUserDto: forgotPasswordDto) {
    return this.userService.forgotPassword(forgotUserDto);
  }


  @Post('change-password')
  @UseGuards(emailNotFound)
  changePassword(@Body() changePasswordDto: changePasswordDto) {
    return this.userService.resetPassword(changePasswordDto);
  }
}
