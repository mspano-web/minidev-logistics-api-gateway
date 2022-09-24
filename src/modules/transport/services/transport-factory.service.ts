import { Injectable } from '@nestjs/common';

import { RqDeleteTransportDto, RqGetTransportDto } from '../dto';
import { ITransportFactory } from '../interfaces/transport-factory.interface';

/* ------------------------------------------------------- */

@Injectable()
export class TransportFactoryService implements ITransportFactory {
  createGetRequestDTO(id: number): RqGetTransportDto {
    return new RqGetTransportDto(id);
  }

  /* ------------------- */

  createDeleteRequestDTO(id: number): RqDeleteTransportDto {
    return new RqDeleteTransportDto(id);
  }
}

/* ------------------------------------------------------- */
