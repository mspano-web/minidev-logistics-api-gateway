import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

/* ----------------------------------- */

export class PointDto {
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitud: number;
}

/* ----------------------------------- */

export class RqCreateCustomerDto {
    @ApiProperty({
        type: String,
        description: 'Name',
      })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: 'Address',
      })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({
        type: Object,
        description: 'Location',
      })
    @IsNotEmpty()
    @IsObject()
    location: PointDto;

    @ApiProperty({
        type: Number,
        description: 'Zone_id',
      })
    @IsNotEmpty()
    @IsNumber()
    zone_id: number;

    @ApiProperty({
        type: Number,
        description: 'Role_id',
      })
    @IsNotEmpty()
    @IsNumber()
    role_id: number;
    
    @ApiProperty({
        type: String,
        description: 'Username',
      })
    @IsNotEmpty()
    @IsString()
    username: string;
    
    @ApiProperty({
        type: String,
        description: 'Password',
      })
    @IsNotEmpty()
    @IsString()
    password: string;

}

/* ----------------------------------- */
