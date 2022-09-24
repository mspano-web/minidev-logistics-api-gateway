import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, timeout } from 'rxjs';
import { RqCreateTransportDto, RsCreateTransportDto } from './dto';
import { RqUpdateTransportDto } from './dto/rq-update-transport.dto';
import { RsGetTransportDto } from './dto/rs-get-transport.dto';
import {
  ITransportFactory,
  TRANSPORT_FACTORY_SERVICE,
} from './interfaces/transport-factory.interface';

/* ------------------------------------------------- */

@Controller('transports')
export class TransportController {
  constructor(
    @Inject('RABIT_SERVICE_TRANSPORT') private client: ClientProxy,

    private readonly configService: ConfigService,

    @Inject(TRANSPORT_FACTORY_SERVICE)
    private readonly transportFactoryService: ITransportFactory,
  ) {}

  /* ---------------- */

  @Get()
  async getTransports() {
    return this.client.send({ cmd: 'ms-get-transports' }, '');
  }

  /* ---------------- */

  @Get(':id')
  async getTransport(
    @Param('id') id: string,
  ): Promise<Observable<RsGetTransportDto>> {
    const rqGetTransportDto = this.transportFactoryService.createGetRequestDTO(
      parseInt(id),
    );

    return this.client
      .send<RsGetTransportDto>({ cmd: 'ms-get-transport' }, rqGetTransportDto)
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }

  /* ---------------- */

  @Post()
  async createTransport(
    @Body() rqCreateTransportDto: RqCreateTransportDto,
  ): Promise<Observable<RsCreateTransportDto>> {
    return this.client
      .send({ cmd: 'ms-transport-create' }, rqCreateTransportDto)
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }

  /* ---------------- */

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Observable<any>> {
    const rqDeleteTransportDto =
      this.transportFactoryService.createDeleteRequestDTO(parseInt(id));

    return this.client
      .send({ cmd: 'ms-delete-transport' }, rqDeleteTransportDto)
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }

  /* ---------------- */

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() rqUpdateTransportDto: RqUpdateTransportDto,
  ) {
    return this.client
      .send({ cmd: 'ms-update-transport' }, { id, rqUpdateTransportDto })
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }
}

/* ------------------------------------------------- */
