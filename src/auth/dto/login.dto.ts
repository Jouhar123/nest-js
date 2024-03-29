import { IsEmail, IsNotEmpty,  MinLength } from "class-validator";



export class LoginDto{

    @IsNotEmpty()
    @IsEmail({},{message:"please enter correct email"})
    readonly email:string;
    @IsNotEmpty()
    @MinLength(6)
    readonly password:string;
  
}

