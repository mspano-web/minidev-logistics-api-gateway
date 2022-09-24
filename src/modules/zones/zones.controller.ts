import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RqCreateZonesDto, RsCreateZonesDto, RsGetZonesDto } from './dto';

/* ------------------------------------------------*/

@Controller('zones')
export class ZonesController {
  constructor(@Inject('RABBIT_SERVICE_ZONES') private client: ClientProxy) {}

  /* ------------ */

  @Get()
  async getZones(): Promise<Observable<RsGetZonesDto>> {
    return this.client.send<RsGetZonesDto>({ cmd: 'ms-get-zones' }, '');
  }

  /* ------------ */

  @Post()
  async createZones(
    @Body() rqCreateZonesDto: RqCreateZonesDto,
  ): Promise<Observable<RsCreateZonesDto>> {
    return this.client.emit({ cmd: 'ms-create-zones' }, rqCreateZonesDto);
  }
}

/* ------------------------------------------------*/
