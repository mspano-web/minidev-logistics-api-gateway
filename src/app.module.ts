import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CustomersModule } from './modules/customers/customers.module';
import { SecurityModule } from './modules/security/security.module';
import { TransportModule } from './modules/transport/transport.module';
import { ZonesModule } from './modules/zones/zones.module';
import { CompanyDependenciesModule } from './modules/company-dependencies/company-dependencies.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { RoutesModule } from './modules/routes/routes.module';
import { ParamsModule } from './modules/params/params.module';
import { LocationModule } from './modules/location/location.module';
import { LoggerModule } from 'nestjs-pino';
import { CorrelationIdMiddleware, CORRELATION_ID_HEADER } from './midlewares/correlation-id.middleware';
import { Request } from 'express';

/* ---------------------------------------------- */

@Module({
  imports: [
    ConfigModule.forRoot( { isGlobal: true } ), 
    LoggerModule.forRoot({
      pinoHttp: {
        transport: process.env.NODE_ENV === 'development' ? {
          target: 'pino-pretty',
          options: {
            messageKey: 'message'
          }
        } : undefined,
        messageKey: 'message',
        customProps: (req: Request)  => { // All request show correlation Id
            return {
              correlationId: req[CORRELATION_ID_HEADER]
            }
        },
        autoLogging: false,
        serializers: {
          req: ()  => {
            return undefined
          },
          res: ()  => {
            return undefined
          }

        }
      }
    }),
    CustomersModule, SecurityModule, TransportModule, ZonesModule, CompanyDependenciesModule, ProductsModule, OrdersModule, RoutesModule, ParamsModule, LocationModule],
  controllers: [],
  providers: [],
})

/* ---------------------------------------------- */

export class AppModule implements NestModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get("PORT_APP")  //  +  -->  cast to number
  }
  
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*')
  }
}

/* ---------------------------------------------- */
