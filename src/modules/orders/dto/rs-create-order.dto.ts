import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';

export class RsCreateOrderDataDto {
  id: number;
}

export class RsCreateOrderDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsCreateOrderDataDto: RsCreateOrderDataDto;
}

/* ----------------------------------- */
