import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtPayload } from '../interfaces/jwt-payload.interface';

/* --------------------------------------------------- */

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      secretOrKey: configService.get('JWT_SECRET_KEY'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpirarion: false,
    });
  }

  /* --------------- */

  async validate(payload: JwtPayload): Promise<any> {
    const { id, username } = payload;
    console.log("validate id:", id, " username:",username )

    return { id, username };
  }
}

/* --------------------------------------------------- */
