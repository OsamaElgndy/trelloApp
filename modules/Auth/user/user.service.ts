import { Injectable } from '@nestjs/common';
import { forgotPasswordDto, loginUserDto, registerUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { SALT_ROUND } from 'common/constants/constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
   create(loginUserDto: loginUserDto) {
    const {email ,password} = loginUserDto
 
  }

  async createUser(registerUserDto: registerUserDto){
    const {email ,password,firstName,lastName} = registerUserDto
    console.log(SALT_ROUND);
    
    const hashPassword = await  bcrypt.hash(password,+SALT_ROUND );
    const creatingData = this.usersRepository.create({email ,password:hashPassword,firstName,lastName})
    return await this.usersRepository.save(creatingData)

  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update( updateUserDto: forgotPasswordDto) {
    return `This action updates a # user`;
  }

  remove() {
    return `This action removes a # user`;
  }
}
