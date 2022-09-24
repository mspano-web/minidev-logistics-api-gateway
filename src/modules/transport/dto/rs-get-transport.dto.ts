import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';

/* ----------------------------------- */

export class RsGetTransportDataDto {
  owner_name: string;
  vehicle_identification: string;
  volume_capacity: number;
  weight_capacity: number;
  cellphone_number: string;
  zone_id: number;
}

/* ----------------------------------- */

export class RsGetTransportDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetTransportDataDto: RsGetTransportDataDto;
}

/* ----------------------------------- */
