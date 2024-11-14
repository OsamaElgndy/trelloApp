import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './common/constants/constants';
import { UserModule } from './modules/Auth/user/user.module';
import { User } from './modules/Auth/user/entities/user.entity';

console.log(TypeOrmConfig);


@Module({


  imports: [

    TypeOrmModule.forRoot({
      type: TypeOrmConfig.type as any,
      host: TypeOrmConfig.host,
      port: +TypeOrmConfig.port,
      username: TypeOrmConfig.username,
      password: TypeOrmConfig.password,
      database: TypeOrmConfig.database,
      entities: [
        User
        // __dirname + './**/*.entity{.ts,.js}',

      ],

      synchronize: TypeOrmConfig.synchronize == "development" ? true : false,
    }),
    UserModule,
  ],
  controllers: [AppController  ],
  providers: [AppService  ],
})
export class AppModule { }
