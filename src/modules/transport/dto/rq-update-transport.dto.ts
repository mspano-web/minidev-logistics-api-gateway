import { IsNumber, IsString } from "class-validator";

/* ----------------------------------- */

export class RqUpdateTransportDto {
    @IsString()
    owner_name: string;

    @IsString()
    vehicle_identification: string;

    @IsNumber()
    volume_capacity: number;

    @IsNumber()
    weight_capacity: number;

    @IsString()
    cellphone_number: string;

    @IsNumber()
    zone_id: number;
}

/* ----------------------------------- */
