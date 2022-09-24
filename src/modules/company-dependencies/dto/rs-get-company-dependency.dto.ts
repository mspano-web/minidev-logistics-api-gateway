import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';
import { DependencyType } from '../types/enums';
import { PointDto } from './rq-create-company-dependency.dto';

/* -------------------------------------------------- */

export class RsGetCompanyDependencyDataDto {
  statusCode: number;
  message: string;
  description: string;
  dependencyType: DependencyType;
  zone_id: number;
  address: string;
  position: PointDto;
}

/* --------------- */

export class RsGetCompanyDependencyDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetCompanyDependencyDataDto: RsGetCompanyDependencyDataDto[];
}

/* -------------------------------------------------- */
