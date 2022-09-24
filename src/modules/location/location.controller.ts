import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import {
  RqCreateLocationDto,
  RqGetLocationsTransportDto,
  RsCreateLocationDto,
  RsGetLocationsTransportDto,
} from './dto';

/* ----------------------------------- */

@Controller('location')
export class LocationController {
  constructor(
    @Inject('LOCATION_TRANSPORT') private location_transport: ClientProxy,

    private readonly logger: Logger,
  ) {}

  /* ------------- */

  @Post()
  createLocationTransport(@Body() rqCreateLocationDto: RqCreateLocationDto) {
    this.logger.log(
      `[POST][location] rqCreateLocationDto: ${rqCreateLocationDto}`,
    );
    return this.location_transport.emit<RsCreateLocationDto>(
      'ms-create-location',
      rqCreateLocationDto,
    );
  }

  /* ------------- */

  @Get('get-locations-transport')
  getLocationsTransport(@Query() query: RqGetLocationsTransportDto) {
    this.logger.log(
      `[GET][location/get-locations-transport] date_route: , ${query.date_route}, ' transport_id:', ${query.transport_id}`,
    );
    return this.location_transport.send<RsGetLocationsTransportDto>(
      'ms-get-locations-transport',
      query,
    );
  }

  
}

/* ----------------------------------- */
