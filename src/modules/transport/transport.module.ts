import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TransportController } from './transport.controller';
import { TransportFactoryService } from './services/transport-factory.service';
import { TRANSPORT_FACTORY_SERVICE } from './interfaces/transport-factory.interface';

/* ------------------------------------------------------ */

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TransportController],
  providers: [
    {
      provide: 'RABIT_SERVICE_TRANSPORT',
      useFactory: (configService: ConfigService) => {
        const queue_input = configService.get<string>('QUEUE_INPUT');
        const host = configService.get<string>('TRANSPORT_HOST');
        //const user = configService.get<string>('TRANSPORT_USER')
        //const password = configService.get<string>('TRANSPORT_PASSWORD')
        const port = parseInt(configService.get<string>('TRANSPORT_PORT'));

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            //urls: [`amqp://${user}:${password}@${host}:${port}`],
            urls: [`amqp://${host}:${port}`],
            queue: `${queue_input}`,
            queueOptions: {
              durable: true, //persistent
            },
          },
        });
      },
      inject: [ConfigService],
    },
    {
      useClass: TransportFactoryService, // You can switch useClass to different implementation
      provide: TRANSPORT_FACTORY_SERVICE,
    },
  ],
})

/* ------------------------------------------------------ */

export class TransportModule {}

