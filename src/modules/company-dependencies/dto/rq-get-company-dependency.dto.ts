import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

/* -------------------------------------------- */

@Exclude()
export class RqGetCompanyDependencyDto {
    @ApiProperty({
        type: String,
        description: 'Company Dependency Id',
      })
    @Expose()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    constructor(id: number) {
      this.id = id;
    }
}

/* -------------------------------------------- */
