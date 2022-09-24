import { IsDateString, IsEnum, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { StateType } from "../types/enums"

/* ------------------------------------ */

export class RqCreateOrderDetailsDto {
  @ApiProperty({
    type: Number,
    description: 'Product ID',
  })
  @IsString()
  product_id: string;

  @ApiProperty({
    type: Number,
    description: 'Quantity',
  })
  @IsNumber()
  quantity: number;
}

/* ------------------------------------ */

export class RqCreateOrderDto {

    @IsEnum(StateType)
    @ApiProperty({
      description: 'State',
      enum: StateType
    })
    state: StateType;

    @ApiProperty({
        type: Date,
        description: 'Date Delivery',
      })
    @IsDateString()
    readonly date_delivery: string;

    @ApiProperty({
      type: Number,
      description: 'Client ID',
    })
    @IsPositive()
    @IsNumber()
    client_id: number;

    @ApiProperty({
      type: Number,
      description: 'Amount',
    })
    @IsPositive()
    @IsNumber()
    amount: number;

    @ApiProperty({
      type: Array,
      description: 'Order Detail',
    })
    rqCreateOrderDetailsDto: RqCreateOrderDetailsDto[];
}

/* ------------------------------------ */
