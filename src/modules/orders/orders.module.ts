import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

import { OrdersController } from './orders.controller';
import { OrdersFactoryService } from './services/orders-factory.service';
import { ORDERS_FACTORY_SERVICE } from './interfaces';

/* ----------------------------------------------- */

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [
    {
      provide: 'ORDER_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('ORDER_HOST'),
            port: configService.get('ORDER_PORT'),
          },
        }),
    },
    {
      useClass: OrdersFactoryService, // You can switch useClass to different implementation
      provide: ORDERS_FACTORY_SERVICE,
    },
  ],
})

/* ----------------------------------------------- */
export class OrdersModule {}
