// To use dependency injection with interfaces we need to create a token to associate with an

import { RqDeleteTransportDto, RqGetTransportDto } from "../dto";


//   interface and provide that token when injecting to an interface type.
export const TRANSPORT_FACTORY_SERVICE = 'TRANSPORT_FACTORY_SERVICE';

/* ----------------------------------- */

export interface ITransportFactory {
    createGetRequestDTO(id: number): RqGetTransportDto;
    createDeleteRequestDTO(id: number): RqDeleteTransportDto;
}

/* ----------------------------------- */

