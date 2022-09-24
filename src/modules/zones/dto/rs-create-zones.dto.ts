import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';

/* ----------------------------------- */

export class RsCreateZonesDataDto {
  id: number;
}

/* ----------------------------------- */

export class RsCreateZonesDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsCreateZonesDataDto: RsCreateZonesDataDto;
}

/* ----------------------------------- */
