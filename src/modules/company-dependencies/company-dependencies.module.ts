import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { CompanyDependenciesController } from './company-dependencies.controller';
import { COMPANY_DEPENDENCY_FACTORY_SERVICE } from './interfaces';
import { CompanyDependencyFactoryService } from './services/company-dependency-factory.service';

/* ------------------------------------------------- */

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CompanyDependenciesController],
  providers: [
    {
      provide: 'COMPANY_DEPENDENCIES_TRANSPORT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: {
            url: configService.get('COMPANY_DEPENDENCIES_URL'),
          },
        }),
    },
    {
      useClass: CompanyDependencyFactoryService, // You can switch useClass to different implementation
      provide: COMPANY_DEPENDENCY_FACTORY_SERVICE,
    },
  ]
})

/* ------------------------------------------------- */

export class CompanyDependenciesModule {}
