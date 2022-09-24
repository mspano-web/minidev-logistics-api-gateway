import {  IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


/* ----------------------------------- */

export class RqCreateZonesDto {
    @ApiProperty({
        type: String,
        description: 'Description',
      })
    @IsString()
    description: string;
}

/* ----------------------------------- */
