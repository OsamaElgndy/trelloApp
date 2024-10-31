import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'common/constants/constants';
import { UserModule } from 'modules/user/user.module';
import { UserController } from 'modules/user/user.controller';
import { UserService } from 'modules/user/user.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: TypeOrmConfig.type as any,
      host: TypeOrmConfig.host,
      port: +TypeOrmConfig.port,
      username: TypeOrmConfig.username,
      password: TypeOrmConfig.password,
      database: TypeOrmConfig.database,
      entities: TypeOrmConfig.entities,
      synchronize: TypeOrmConfig.synchronize == "development" ? true : false,
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService , UserService],
})
export class AppModule { }
