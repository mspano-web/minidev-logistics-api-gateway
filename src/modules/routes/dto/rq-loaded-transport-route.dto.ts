import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/* ------------------------------------------ */

export class RqLoadedTransportRouteDto {
  @ApiProperty({
    type: String,
    description: 'Id Route',
  })
  @IsString()
  readonly route_id: string;

}

/* ------------------------------------------ */
