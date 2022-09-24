import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';

/* ----------------------------------- */

export class RsGetZonesDataDto {
  description: string;
}

/* ----------------------------------- */

export class RsGetZonesDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetZonesDataDto: RsGetZonesDataDto;
}
