import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';
import { StateType } from '../types/enums';

/* ------------------------------------------------- */

export class RsGetOrderDetailsDto {
  product_id: string;
  quantity: number;
}

/* --------------- */

export class RsGetOrderHeaderDto {
  state: StateType;
  date_delivery: string;
  client_id: number;
  amount: number;
  rsGetOrderDetails: RsGetOrderDetailsDto[];
}

/* --------------- */

export class RsGetOrderDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetOrderHeaderDto: RsGetOrderHeaderDto;
}

/* ------------------------------------------------- */
