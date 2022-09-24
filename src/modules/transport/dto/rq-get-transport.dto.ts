import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

/* ----------------------------------- */

@Exclude()
export class RqGetTransportDto {
    @ApiProperty({
        type: String,
        description: 'Transport Id',
      })
    @Expose()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    constructor(idParam: number) {
      this.id = idParam
    }
}

/* ----------------------------------- */
