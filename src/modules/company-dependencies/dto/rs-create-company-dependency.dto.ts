import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';

/* -----------------------------------------------------------  */

export class RsCreateCompanyDependencyDataDto {
  id: number;
}

/* ----------------------------------- */

export class RsCreateCompanyDependencyDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsCreateCompanyDependencyDataDto: RsCreateCompanyDependencyDataDto;
}

/* -----------------------------------------------------------  */
