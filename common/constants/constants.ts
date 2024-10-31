export const TypeOrmConfig = {
 type: process.env.TYPEORM,
 host: process.env.TYPEORM_HOST,
 port: process.env.TYPEORM_PORT,
 username: process.env.TYPEORM_USERNAME,
 password: process.env.TYPEORM_PASSWORD,
 database: process.env.TYPEORM_DATABASE,
 entities: ["dist/**/*.entity{.ts,.js}"],
 synchronize: process.env.TYPEORM_SYNCHRONIZE
}