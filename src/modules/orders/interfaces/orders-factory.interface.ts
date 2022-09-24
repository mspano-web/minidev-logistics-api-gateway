// To use dependency injection with interfaces we need to create a token to associate with an

import { RqDeleteOrderDto, RqGetOrderDto } from "../dto";

//   interface and provide that token when injecting to an interface type.
export const ORDERS_FACTORY_SERVICE = 'ORDERS_FACTORY_SERVICE';

/* ------------------------------------ */

export interface IOrdersFactory {
    createGetRequestDTO(id: number): RqGetOrderDto;
    deleteRequestDTO(id: number): RqDeleteOrderDto;
}

/* ------------------------------------ */

