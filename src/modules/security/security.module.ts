import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { SecurityController } from './security.controller';
import { JwtStrategy } from './services/jwt-strategy.service';
import { JwtTokens } from './services/jwt-tokens.service';

/* --------------------------------------------------- */


@Module({
    imports: [ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.get('JWT_SECRET_KEY'),
        signOptions: {
            expiresIn: parseInt(configService.get('JWT_EXPIRESION_KEY')),
        },
      }),
      inject: [ConfigService],
    }),
  ],
   
  controllers: [SecurityController],
  providers: [
    {
      provide: 'AUTH_TRANSPORT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('SECURITY_HOST'),
            port: configService.get('SECURITY_PORT'),
          },
        }),
    },
    JwtStrategy,
    JwtTokens
  ],
})

/* --------------------------------------------------- */

export class SecurityModule {}

/* --------------------------------------------------- */
