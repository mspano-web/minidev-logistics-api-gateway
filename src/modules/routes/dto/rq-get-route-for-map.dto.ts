import { IsDateString,  IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/* ------------------------------------------ */

export class RqGetRouteForMapDto {
  @ApiProperty({
    type: Date,
    description: 'Date Route',
  })
  @IsDateString()
  readonly date_route: string;

  @ApiProperty({
    type: String,
    description: 'Id Transport',
  })
  @IsString()
  readonly transport_id: string;

}

/* ------------------------------------------ */
