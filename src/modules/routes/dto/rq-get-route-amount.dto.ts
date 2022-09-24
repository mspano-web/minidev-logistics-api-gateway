import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/* ------------------------------------------ */

export class RqGetRouteAmountDto {
  @ApiProperty({
    type: String,
    description: 'Id Route',
  })
  @IsString()
  readonly route_id: string;

}

/* ------------------------------------------ */
