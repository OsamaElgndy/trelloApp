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

export const JWT_SECRET = process.env.JWT_SECRET

export const Email_SERVICE = {
  EMAIL_ACCOUNT: process.env.EMAIL_ACCOUNT,
  PASSWORD_EMAIL: process.env.PASSWORD_EMAIL
}

export const BACE_URL = process.env.BACE_URL