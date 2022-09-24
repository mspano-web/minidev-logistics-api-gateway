import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

/* -------------------------------------------- */

@Exclude()
export class RqGetCompanyDependenciesByZoneDto {
    @ApiProperty({
        type: String,
        description: 'Company Dependency Zone Id',
      })
    @Expose()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    constructor(zone_id: number) {
      this.id = zone_id;
    }
}

/* -------------------------------------------- */
