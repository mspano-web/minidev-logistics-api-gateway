import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';
import { PointDto } from './rq-create-customer.dto';

/* ----------------------------------- */

export class RsGetCustomerDataDto {
  name: string;
  address: string;
  position: PointDto;
  zone_id: number;
  role_id: number;
}

/* ----------------------------------- */

export class RsGetCustomerDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rtsGetCustomerDataDto: RsGetCustomerDataDto;
}

/* ----------------------------------- */
