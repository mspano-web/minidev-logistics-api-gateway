import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { CustomersController } from './customers.controller';
import { CUSTOMER_FACTORY_SERVICE } from './interfaces';
import { CustomerFactoryService } from './services/customer-factory.service';

/* ------------------------------------------------- */

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CustomersController],
  providers: [
    {
      provide: 'CUSTOMER_TRANSPORT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('CUSTOMER_HOST'),
            port: configService.get('CUSTOMER_PORT'),
          },
        }),
    },
    {
      useClass: CustomerFactoryService, // You can switch useClass to different implementation
      provide: CUSTOMER_FACTORY_SERVICE,
    },
]
})

/* ------------------------------------------------- */

export class CustomersModule {}
