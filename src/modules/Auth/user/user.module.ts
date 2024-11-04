import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import {JWT_SECRET} from '../../../common/constants/constants';
import { QrCodeService } from '../../../common/constants/qrCode/qr-code.service';
import { SendEmailService } from '../../../common/constants/sendEmail/send_email.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]) ,
  JwtModule.register({
    global: true,
    secret: JWT_SECRET ,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [UserController],
  providers: [UserService ,QrCodeService , SendEmailService ],
})
export class UserModule {}
