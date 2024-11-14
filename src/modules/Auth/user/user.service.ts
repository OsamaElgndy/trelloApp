import {  Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { changePasswordDto, forgotPasswordDto, loginUserDto, registerUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from "./entities/user.entity"
import { QrCodeService } from '../../../common/constants/qrCode/qr-code.service';
import { JwtService } from '@nestjs/jwt';
import { SendEmailService } from '../../../common/constants/sendEmail/send_email.service';
import { TemplateErorr, TemplateSuccess } from '../../../common/constants/sendEmail/template';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, private jwtService: JwtService, private QrCodeService: QrCodeService, private SendEmailService: SendEmailService) { }


  async loginUser(loginUserDto: loginUserDto) {
    const { email, password } = loginUserDto
    const user = await this.usersRepository.findOne({ where: { email: email } })
    if (!user) {
      throw new NotFoundException("Email not found or in-vaild Password")
    }
    if (!user.isActive) {
      throw new NotAcceptableException("Please activate your account")
    }
    const isMatch = await user.validatePassword(password)
    if (!isMatch) {
      throw new NotFoundException("Email not found or in-vaild Password")
    }
    //   cerate payload = 
    const payload = {
      email: user.email,
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    }
    const token = this.jwtService.sign(payload)
    return { ...payload, token }


  }

  async createUser(registerUserDto: registerUserDto) {
    const { email, password, firstName, lastName } = registerUserDto
    const creatingData = this.usersRepository.create({ email, password, firstName, lastName })

    await this.usersRepository.save(creatingData)
    const payload = {
      email: creatingData.email,
      id: creatingData.id,
      firstName: creatingData.firstName,
      lastName: creatingData.lastName,
    }
    const token = this.jwtService.sign(payload)
    this.QrCodeService.generateQrCode(token)
    this.SendEmailService.mainConfirmEmail(token, firstName)
    return { "message": "User Created Successfully , Please check your email to activate your account", ...payload, token }
  }

  async verifyAccount(token: string) {
    const decode = this.jwtService.decode(token)
    try {
      const { email, firstName } = decode
      const user = await this.usersRepository.findOne({ where: { email: email } })
      const updatedUser = await this.usersRepository.update(user.id, { isActive: true })
      console.log(updatedUser, "updatedUser" , email , firstName , TemplateSuccess(firstName, email) ); ;
      
      return `${TemplateSuccess(firstName, email)}`;
    } catch (error) {
      return `Email not found or in-vaild Password ${TemplateErorr}`;
    }
  }


  async forgotPassword(forgotPasswordDto: forgotPasswordDto) {
    const { email } = forgotPasswordDto
    const user = await this.usersRepository.findOne({ where: { email: email } })
    if (!user.isActive) {
      throw new UnauthorizedException("Please activate your account ")

    }
    
    const qrCode = await this.QrCodeService.generateQrCode(email)
    // create  OTP
    const code = Math.random().toString(36).slice(-5)
    //  hash code
    this.usersRepository.update(user.id, { isActive: false , codeOTP: code })

    console.log(qrCode);
    // send email
    this.SendEmailService.mainOTP(code)


    return {message: "Please check your email to reset your password" , status: 201 };
  }

  async resetPassword(changePasswordDto: changePasswordDto) {
    const { OTP, newPassword , confirmPassword ,  email } = changePasswordDto
    if (newPassword !== confirmPassword) {
      throw new UnauthorizedException("Password not match ,Please try again")
    }
    const user = await this.usersRepository.findOne({ where: { email: email } })
      if (user.codeOTP !== OTP) {
        throw new UnauthorizedException("OTP not match ,Please try again and Check your email OTP")
    }
     await this.usersRepository.update(user.id, { password: newPassword ,codeOTP: null })
    return { message: "Password Reset Successfully", status: 201 };
  }
  async findAllUsers(){
    const users = await this.usersRepository.find()
    return users


  }
}
