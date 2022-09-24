import { RsGenericHeaderDto } from 'src/dto/rs-generic-header.dto';
import { PointDto } from './rq-create-company-dependency.dto';

/* -------------------------------------------------- */

export class RsGetCompanyDependencyDataByZoneDto {
  id: number;
  description: string;
  dependencyType: string;
  zone_id: number;
  address: string;
  position: PointDto;
}

/* --------------- */

export class RsGetCompanyDependencyByZoneDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetCompanyDependencyDataByZoneDto:  RsGetCompanyDependencyDataByZoneDto[];
}

/* -------------------------------------------------- */
