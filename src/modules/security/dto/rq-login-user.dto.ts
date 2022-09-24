import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString } from "class-validator";

/* -------------------------------------------------------- */

export class RqLoginUserDto {
    @ApiProperty({
        type: String,
        description: 'Username',
      })
    @IsNotEmpty()
    @IsString()
    readonly username: string;
    @ApiProperty({
        type: String,
        description: 'Password',
      })
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}

/* -------------------------------------------------------- */

