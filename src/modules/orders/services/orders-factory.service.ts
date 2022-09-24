import { Injectable } from '@nestjs/common';

import { RqDeleteOrderDto, RqGetOrderDto } from '../dto';
import { IOrdersFactory } from '../interfaces';


/* ------------------------------------------------------- */

@Injectable()
export class OrdersFactoryService implements IOrdersFactory {

  createGetRequestDTO(id: number): RqGetOrderDto {
    return new RqGetOrderDto(id);
  }

  deleteRequestDTO(id: number): RqDeleteOrderDto {
    return new RqDeleteOrderDto(id);
  }
}

/* ------------------------------------------------------- */
