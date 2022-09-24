import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';
import { StateType } from '../types/enums';

/* ------------------------------------------------- */

export class RsGetOrdersDetailsDto {
  product_id: string;
  quantity: number;
}

/* --------------- */

export class RsGetOrdersHeaderDto {
  state: StateType;
  date_delivery: string;
  client_id: number;
  amount: number;
  rsGetOrdersDetails: RsGetOrdersDetailsDto[];
}

/* --------------- */

export class RsGetOrdersDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetOrdersHeaderDto: RsGetOrdersHeaderDto[];
}

/* ------------------------------------------------- */