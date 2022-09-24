import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from '../interfaces/jwt-payload.interface';

/* --------------------------------------------------- */

@Injectable()
export class JwtTokens {
  constructor(private readonly jwtService: JwtService) {}

  /* --------------- */

  jwtTokenGenerate(id: string, username: string): string {
    const payload: JwtPayload = { id: id, username: username };
    console.log("jwtTokenGenerate id:", id, " username:",username )
    return this.jwtService.sign(payload);
  }
}

/* --------------------------------------------------- */
