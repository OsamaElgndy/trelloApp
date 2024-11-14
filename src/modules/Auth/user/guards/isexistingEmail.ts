import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class isexsistingEmail implements CanActivate {
  constructor(
    @InjectRepository(User)
    private dataBase: Repository<User>,
  ) { }


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const email = request.body.email
  

    const user = await this.dataBase.findOne({ where: { email: email } });
     console.log(user , "user")
    
     if(user){
    throw new UnauthorizedException('Email already exists'); 
    }

    return true


     

  }
}


