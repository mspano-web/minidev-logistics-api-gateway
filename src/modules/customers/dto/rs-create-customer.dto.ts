import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';

/* ----------------------------------- */

export class RsCreateCustomerDataDto {
  id: number;
}

/* ----------------------------------- */

export class RsCreateCustomerDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsCreateCustomerDataDto: RsCreateCustomerDataDto;
}

/* ----------------------------------- */
