import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

import { Observable } from 'rxjs';
import { RqGetParamsDto, RsGetParamsDto } from './dto';

/* -------------------------------- */

@Controller('params')
export class ParamsController {
  constructor(
    @Inject('PARAMS_TRANSPORT') private readonly paramsClient: ClientKafka,
    private readonly rqGetParamsDto: RqGetParamsDto,
  ) {}

  /* --------------- */

  @Get()
  async findAll(): Promise<Observable<RsGetParamsDto>> {
    return this.paramsClient.send<RsGetParamsDto>(
      'ms-params-get',
      JSON.stringify(this.rqGetParamsDto),
    );
  }

  /* --------------- */

  async onModuleInit() {
    this.paramsClient.subscribeToResponseOf('ms-params-get');
    await this.paramsClient.connect();
  }
}

/* -------------------------------- */
