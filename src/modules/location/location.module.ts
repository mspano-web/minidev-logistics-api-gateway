import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { LocationController } from './location.controller';

/* ----------------------------------- */

@Module({
  imports: [ConfigModule.forRoot(),
  ],
  controllers: [LocationController],
  providers: [
    {
      provide: 'LOCATION_TRANSPORT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.MQTT,
          options: {
            host: configService.get('LOCATION_HOST'),
            port: configService.get('LOCATION_PORT'),
          },
        }),
    },
   Logger
  ]
})

/* ----------------------------------- */

export class LocationModule {}
