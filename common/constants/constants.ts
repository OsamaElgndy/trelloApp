import 'dotenv/config';
export const TypeOrmConfig = {
 type: process.env.TYPEORM,
 host: process.env.TYPEORM_HOST,
 port: process.env.TYPEORM_PORT,
 username: process.env.DATABASE_USER_NAME,
 password: process.env.DATABASE_PASSWORD,
 database: process.env.DATABASE_NAME,
 synchronize: process.env.TYPEORM_SYNCHRONIZE
}


export  const SALT_ROUND = process.env.SALT_ROUND