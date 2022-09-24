import { IsNumber, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

/* ----------------------------------- */

export class RqCreateTransportDto {
    @ApiProperty({
        type: String,
        description: 'Name',
      })
    @IsString()
    owner_name: string;

    @ApiProperty({
        type: String,
        description: 'Vehicle Identification',
      })
    @MaxLength(10)
    @IsString()
    vehicle_identification: string;

    @ApiProperty({
        type: Number,
        description: 'Volume Capacity',
      })
    @IsNumber()
    volume_capacity: number;

    @ApiProperty({
      type: Number,
      description: 'Weight Capacity',
    })
    @IsNumber()
    weight_capacity: number;

    @ApiProperty({
      type: String,
      description: 'Mobile',
    })
    @IsString()
    cellphone_number: string;

    @ApiProperty({
        type: Number,
        description: 'Zone_id',
      })
    @IsNumber()
    zone_id: number;
}

/* ----------------------------------- */
