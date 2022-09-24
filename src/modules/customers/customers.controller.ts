import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse,  } from '@nestjs/swagger';

import { Observable, timeout } from 'rxjs';

import { JwtAuthGuard } from '../security/utilities/jwt-auth-guard';
import {
  RqCreateCustomerDto,
  RsCreateCustomerDto,
  RsGetCustomerDto,
} from './dto';
import { CUSTOMER_FACTORY_SERVICE, ICustomerFactory } from './interfaces';

/* -------------------------------------------------------  */

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(
    @Inject('CUSTOMER_TRANSPORT') private customer_transport: ClientProxy,
    
    private readonly configService: ConfigService,

    @Inject(CUSTOMER_FACTORY_SERVICE)
    private readonly customerFactoryService: ICustomerFactory,
  ) {}

  /* ---------------------  */

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get Customer' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Customer OK.', type: RsGetCustomerDto })
  async findOne(
    @Param('id') id: string,
  ): Promise<Observable<RsGetCustomerDto>> {
    const rqGetCustomerDto =
      this.customerFactoryService.createGetRequestDTO(parseInt(id));

    return this.customer_transport
      .send<RsGetCustomerDto>('ms-customer-get', rqGetCustomerDto)
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }

 /* --------------------------- */

 @UseGuards(JwtAuthGuard)
 @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Created Succesfully.' })
  async createUser(
    @Body() rqCreateCustomerDto: RqCreateCustomerDto,
  ): Promise<Observable<RsCreateCustomerDto>> {
    return await this.customer_transport
      .send('ms-customer-create', rqCreateCustomerDto)
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }
}

/* -------------------------------------------------------  */
