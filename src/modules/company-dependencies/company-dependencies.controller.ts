import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

import { Observable, timeout } from 'rxjs';

import {
  RqCreateCompanyDependencyDto,
  RsCreateCompanyDependencyDto,
  RsGetCompanyDependencyByZoneDto,
  RsGetCompanyDependencyDto,
} from './dto';

import {
  COMPANY_DEPENDENCY_FACTORY_SERVICE,
  ICompanyDependencyFactory,
} from './interfaces/company-dependency.interface';

/* ------------------------------------------------------------ */

@Controller('company-dependencies')
export class CompanyDependenciesController {
  constructor(
    @Inject('COMPANY_DEPENDENCIES_TRANSPORT')
    private company_dependency_transport: ClientProxy,

    @Inject(COMPANY_DEPENDENCY_FACTORY_SERVICE)
    private readonly companyDependencyFactoryService: ICompanyDependencyFactory,

    private readonly configService: ConfigService,
  ) {}

  /* --------------------------- */

  @Get(':id')
  async getCompanyDependency(
    @Param('id') id: string,
  ): Promise<Observable<RsGetCompanyDependencyDto>> {
    const rqGetCompanyDependencyDto =
      this.companyDependencyFactoryService.createGetRequestDTO(parseInt(id));

    return this.company_dependency_transport
      .send<RsGetCompanyDependencyDto>(
        { cmd: 'ms-get-company-dependency' },
        rqGetCompanyDependencyDto,
      )
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }

  /* --------------------------- */

  @Get('zone/:id')
  async getCompanyDependencyByZone(
    @Param('id') id: string,
  ): Promise<Observable<RsGetCompanyDependencyByZoneDto>> {
    const rqGetCompanyDependenciesByZoneDto =
      this.companyDependencyFactoryService.createGetByZoneRequestDTO(
        parseInt(id),
      );

    return this.company_dependency_transport
      .send<RsGetCompanyDependencyByZoneDto>(
        { cmd: 'ms-get-company-dependency-by-zone' },
        rqGetCompanyDependenciesByZoneDto,
      )
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }

  /* --------------------------- */

  @Post()
  async createCompanyDependency(
    @Body() rqCreateZonesDto: RqCreateCompanyDependencyDto,
  ): Promise<Observable<RsCreateCompanyDependencyDto>> {
    return this.company_dependency_transport.send(
      { cmd: 'ms-create-company-dependency' },
      rqCreateZonesDto,
    );
  }
}

/* ------------------------------------------------------------ */
