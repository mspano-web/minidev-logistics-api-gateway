import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

import { RoutesController } from './routes.controller';

/* ------------------------------------------ */

@Module({
  imports: [],
  controllers: [RoutesController],
  providers: [
    {
      provide: 'ROUTE_TRANSPORT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.NATS,
          options: {
            servers: [
              `nats://${configService.get('ROUTE_HOST')}:${configService.get(
                'ROUTE_PORT',
              )}`,
            ],
          },
        }),
    },
  ],
})

/* ------------------------------------------ */

export class RoutesModule {}
