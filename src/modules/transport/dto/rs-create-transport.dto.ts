import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';

/* ----------------------------------- */

export class RsCreateTransportDataDto {
  id: number;
}

/* ----------------------------------- */

export class RsCreateTransportDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsCreateCustomerDataDto: RsCreateTransportDataDto;
}

/* ----------------------------------- */
