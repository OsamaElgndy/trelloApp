import { IsEmail, IsNotEmpty , IsString } from 'class-validator';
export class loginUserDto {

 @IsString()
 @IsNotEmpty()
 @IsEmail()
 email: string;

 @IsString()
 @IsNotEmpty()
 password: string;
}


export class registerUserDto {

 @IsString()
 @IsNotEmpty()
 @IsEmail()
 email: string;

 @IsString()
 @IsNotEmpty()
 password: string;

 @IsString()
 @IsNotEmpty()
 firstName: string;

 @IsString()
 @IsNotEmpty()
 lastName: string;


}

export class forgotPasswordDto {
  @IsString() 
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class changePasswordDto {
  @IsString() 
  @IsNotEmpty()
  oldPassword: string;

  @IsString() 
  @IsNotEmpty()
  newPassword: string;
  
}