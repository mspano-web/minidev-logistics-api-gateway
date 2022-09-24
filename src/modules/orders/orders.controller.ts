import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import {
  RqCreateOrderDto,
  RsCancelledOrderDto,
  RsDeleteOrdersDto,
  RsGetOrderDto,
  RsGetOrdersDto,
  RsLoadedOrderDto,
} from './dto';
import { RsDeliveredOrderDto } from './dto/rs-delivered-order.dto';
import { IOrdersFactory, ORDERS_FACTORY_SERVICE } from './interfaces';

/* --------------------------------------------------- */

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('ORDER_SERVICE') private orderClient: ClientProxy,

    @Inject(ORDERS_FACTORY_SERVICE)
    private readonly ordersFactoryService: IOrdersFactory,
  ) {}

  /* ---------------- */

  @Post()
  createOrder(@Body() rqCreateOrderDto: RqCreateOrderDto) {
    this.orderClient.emit('order-created', rqCreateOrderDto);
  }

  /* ---------------- */

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    const rqGetOrderDto = this.ordersFactoryService.createGetRequestDTO(
      parseInt(id),
    );

    return this.orderClient.send<RsGetOrderDto>('ms-order-get', rqGetOrderDto);
  }

  /* ---------------- */

  @Get()
  async getOrders() {
    return this.orderClient.send<RsGetOrdersDto>('ms-orders-get', '');
  }

  /* ---------------- */

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const rqDeleteOrderDto = this.ordersFactoryService.deleteRequestDTO(
      parseInt(id),
    );

    return this.orderClient.send<RsDeleteOrdersDto>(
      'ms-order-delete',
      rqDeleteOrderDto,
    );
  }

  /* ---------------- */

  @Patch('delivered/:id')
  async deliveredOrder(@Param('id') id: string) {
    return this.orderClient.send<RsDeliveredOrderDto>('ms-order-delivered', {
      key: id,
    });
  }

  /* ---------------- */

  @Patch('loaded/:id')
  async loadedOrder(@Param('id') id: string) {
    return this.orderClient.send<RsLoadedOrderDto>('ms-order-loaded', {
      key: id,
    });
  }

  /* ---------------- */

  @Patch('cancelled/:id')
  async cancelledOrder(@Param('id') id: string) {
    return this.orderClient.send<RsCancelledOrderDto>('ms-order-cancelled', {
      key: id,
    });
  }
}

/* --------------------------------------------------- */
