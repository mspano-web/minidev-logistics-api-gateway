import { Injectable } from '@nestjs/common';

import { RqGetCustomerDto } from '../dto';
import { ICustomerFactory } from '../interfaces';


/* ------------------------------------------------------- */

@Injectable()
export class CustomerFactoryService implements ICustomerFactory {

  createGetRequestDTO(id: number): RqGetCustomerDto {
    return new RqGetCustomerDto(id);
  }

}

/* ------------------------------------------------------- */
