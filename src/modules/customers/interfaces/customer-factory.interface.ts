// To use dependency injection with interfaces we need to create a token to associate with an

import { RqGetCustomerDto } from "../dto";


//   interface and provide that token when injecting to an interface type.
export const CUSTOMER_FACTORY_SERVICE = 'CUSTOMER_FACTORY_SERVICE';

/* ------------------------------------ */

export interface ICustomerFactory {
    createGetRequestDTO(id: number): RqGetCustomerDto;
}

/* ------------------------------------ */

