import { ApiProperty } from '@nestjs/swagger';

import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

import { DependencyType } from '../types/enums';

/* -------------------------------------------- */

export class PointDto {
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitud: number;
}

/* ------------- */

export class RqCreateCompanyDependencyDto {
  @ApiProperty({
    type: String,
    description: 'Description',
  })
  @IsString()
  description: string;

  @IsEnum(DependencyType)
  @ApiProperty({
    description: 'Dependency Type',
    enum: DependencyType,
  })
  dependencyType: DependencyType;

  @ApiProperty({
    type: Number,
    description: 'Zone_id',
  })
  @IsNumber()
  zone_id: number;

  @ApiProperty({
    type: String,
    description: 'Address',
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: Object,
    description: 'Location',
  })
  @IsNotEmpty()
  @IsObject()
  location: PointDto;
}

/* -------------------------------------------- */
