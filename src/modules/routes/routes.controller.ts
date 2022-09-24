import {
  Body,
  Controller,
  Get,
  Inject,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientNats } from '@nestjs/microservices';

import {
  RqCashDepositRouteDto,
  RqGenerateRouteDto,
  RqGetRouteAmountDto,
  RqGetRouteForMapDto,
  RqGetRouteOrdersDetailsDto,
  RqLoadedTransportRouteDto,
  RsCashDepositRouteDto,
  RsGetRouteOrdersDetailsDto,
  RsLoadedTransportRouteDto,
} from './dto';
import { RsGetRouteAmountDto } from './dto/rs-get-route-amount.dto';
import { RsGetRouteForMapDto } from './dto/rs-get-route-for-map.dto';

/* ------------------------------------------ */

@Controller('routes')
export class RoutesController {
  constructor(
    @Inject('ROUTE_TRANSPORT') private readonly routClient: ClientNats,
  ) {}

  /* -------------------- */

  @Post('generate')
  generateRoute(@Body() rqGenerateRouteDto: RqGenerateRouteDto) {
    this.routClient.emit('generate-route', rqGenerateRouteDto);
  }

  /* -------------------- */

  @Get('map')
  getRouteForMap(@Query() query: RqGetRouteForMapDto) {
    return this.routClient.send<RsGetRouteForMapDto>(
      'get-route-for-map',
      query,
    );
  }

  /* -------------------- */

  @Get('orders-details')
  getOrdesrDetailsRoute(@Query() query: RqGetRouteOrdersDetailsDto) {
    return this.routClient.send<RsGetRouteOrdersDetailsDto>(
      'get-route-orders-details',
      query,
    );
  }

  /* -------------------- */

  @Get('route-amount')
  getAmountRoute(@Query() query: RqGetRouteAmountDto) {
    return this.routClient.send<RsGetRouteAmountDto>('get-route-amount', query);
  }

  /* -------------------- */

  @Patch('cash-deposited')
  cashDepositedRoute(@Query() query: RqCashDepositRouteDto) {
    return this.routClient.send<RsCashDepositRouteDto>('cash-deposited', query);
  }

  /* -------------------- */

  @Patch('loaded-transport')
  loadedTransportRoute(@Query() query: RqLoadedTransportRouteDto) {
    return this.routClient.send<RsLoadedTransportRouteDto>(
      'loaded-transport',
      query,
    );
  }
}

/* ------------------------------------------ */
