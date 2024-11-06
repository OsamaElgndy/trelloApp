import { IsEmail, IsNotEmpty , IsString, Length, Matches, ValidateIf } from 'class-validator';
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
  @Length(5, 5, { message: 'OTP  length must be  5 characters' })
  OTP: string;

  @IsString() 
  @IsNotEmpty()
  newPassword: string;



  @IsString() 
  @IsNotEmpty()
  email: string;
  
  @IsString() 
  @IsNotEmpty()
  confirmPassword: string;
  
}