import { RqGetCompanyDependenciesByZoneDto, RqGetCompanyDependencyDto } from "../dto";

//   interface and provide that token when injecting to an interface type.
export const COMPANY_DEPENDENCY_FACTORY_SERVICE = 'COMPANY_DEPENDENCY_FACTORY_SERVICE';

/* ------------------------------------ */

export interface ICompanyDependencyFactory {
    createGetRequestDTO(id: number): RqGetCompanyDependencyDto;
    createGetByZoneRequestDTO(zone_id: number): RqGetCompanyDependenciesByZoneDto;
}

/* ------------------------------------ */

