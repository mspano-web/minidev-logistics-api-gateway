import { Module } from '@nestjs/common';

import { ZonesController } from './zones.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

/* ----------------------------------- */

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [ZonesController],
  providers: [
    {
      provide: 'RABBIT_SERVICE_ZONES',
      useFactory: (configService: ConfigService) => {
        const queue_input = configService.get<string>('ZONES_QUEUE_INPUT')
        const host = configService.get<string>('ZONES_HOST')
        //const user = configService.get<string>('ZONES_USER')
        //const password = configService.get<string>('ZONES_PASSWORD')
        const port = parseInt(configService.get<string>('ZONES_PORT'))

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            //urls: [`amqp://${user}:${password}@${host}:${port}`],
            urls: [`amqp://${host}:${port}`],
            queue: `${queue_input}`,
            queueOptions: {
              durable:  true, //persistent
            },
          },
        });       
      },
      inject: [ConfigService],
    },]
})
export class ZonesModule {}
/* ----------------------------------- */
