import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsEmail({}, { message: "Invalid email format" }) // Provide options and error message
    @IsNotEmpty({ message: "Email should not be empty" }) // Provide options and error message
    email: string;

    @IsString({ message: "Password should be a string" }) // Provide options and error message
    @IsNotEmpty({ message: "Password should not be empty" }) // Provide options and error message
    password: string;
}
