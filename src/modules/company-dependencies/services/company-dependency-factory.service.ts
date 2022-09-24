import { Injectable } from '@nestjs/common';
import { RqGetCompanyDependenciesByZoneDto, RqGetCompanyDependencyDto } from '../dto';
import { ICompanyDependencyFactory } from '../interfaces/company-dependency.interface';


/* ------------------------------------------------------- */

@Injectable()
export class CompanyDependencyFactoryService implements ICompanyDependencyFactory {

  createGetRequestDTO(id: number): RqGetCompanyDependencyDto {

    return new RqGetCompanyDependencyDto(id);
  }

  createGetByZoneRequestDTO(zone_id: number): RqGetCompanyDependenciesByZoneDto {
    return new RqGetCompanyDependencyDto(zone_id);
  }

}

/* ------------------------------------------------------- */
