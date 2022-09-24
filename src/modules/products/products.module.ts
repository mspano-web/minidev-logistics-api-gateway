import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { join } from 'path';

import { ProductsController } from './products.controller';

/* ------------------------------------------ */

@Module({
  imports: [ConfigModule.forRoot(),],
  controllers: [ProductsController],
  providers: [
    {
      provide: 'PRODUCT_TRANSPORT',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: 'product',
            protoPath: join(__dirname, './product.proto'),
            url: configService.get('URL_PRODUCTS')
          },
        })
      },
      inject: [ConfigService],
    }
  ]
})

/* ------------------------------------------ */

export class ProductsModule {}
