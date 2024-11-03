import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'common/constants/constants';
import { UserModule } from 'modules/Auth/user/user.module';
import { User } from 'modules/Auth/user/entities/user.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: TypeOrmConfig.host,
      port: +TypeOrmConfig.port,
      username: TypeOrmConfig.username,
      password: TypeOrmConfig.password,
      database: TypeOrmConfig.database,
      entities: [ __dirname+'/../**/*.entity.{js,ts}'],
      synchronize: TypeOrmConfig.synchronize == "development" ? true : false,
    }),
    UserModule,
  ],
  controllers: [AppController ],
  providers: [AppService  ],
})
export class AppModule { }
