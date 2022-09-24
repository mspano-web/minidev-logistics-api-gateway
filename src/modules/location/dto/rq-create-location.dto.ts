import { IsDateString, IsNumber, IsObject } from "class-validator";

/* ------------------------- */

export class PointDto {
    @IsNumber()
    latitude: number;
    @IsNumber()
    longitud: number;
}

/* ------------------------- */

export class RqCreateLocationDto {
    @IsNumber()
    transport_id: number;

    @IsObject()
    position: PointDto;

    @IsDateString()
    readonly date_register: string;
}

/* ------------------------- */
