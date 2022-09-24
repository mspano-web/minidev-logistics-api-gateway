import { Module } from '@nestjs/common';
import { ParamsController } from './params.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RqGetParamsDto } from './dto';

/* -------------------------------- */

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PARAMS_TRANSPORT',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'params',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'params-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ParamsController],
  providers: [RqGetParamsDto],
})

/* -------------------------------- */

export class ParamsModule {}
