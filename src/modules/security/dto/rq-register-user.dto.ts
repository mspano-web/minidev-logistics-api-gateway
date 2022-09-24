import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

/* -------------------------------------------------------- */

export class RqRegisterUserDto {
    @ApiProperty({
        type: Number,
        description: 'Role Id',
      })
    @IsNotEmpty()
    @IsNumber()
    readonly role_id: number;
    @ApiProperty({
        type: Number,
        description: 'User Id',
      })
    @IsNotEmpty()
    @IsNumber()
    readonly user_id: number;
    @ApiProperty({
        type: String,
        description: 'Username',
      })
    @IsNotEmpty()
    @IsString()
    readonly username: string;
    @ApiProperty({
        type: String,
        minLength: 6,
        maxLength: 20,
        description: 'Password',
      })
    @IsNotEmpty()
    @IsString()
    @Length(6, 20)
    readonly password: string;
}

/* -------------------------------------------------------- */

