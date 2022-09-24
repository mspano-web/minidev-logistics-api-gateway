import { IsDateString, } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

/* ------------------------------------------ */

export class RqGenerateRouteDto {

     @ApiProperty({
        type: Date,
        description: 'Date Generate',
      })
    @IsDateString()
    readonly date_generate: string;

}

/* ------------------------------------------ */
