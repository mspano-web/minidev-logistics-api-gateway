import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

import { randomUUID } from 'crypto';
import { Request, Response, NextFunction } from 'express';

export const CORRELATION_ID_HEADER = 'X-Correlation-Id';

/* ---------------------------------------------- */

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl, } = req;
    const userAgent = req.get('user-agent') || '';
    const id = randomUUID();

    const preCorrelation = req.get(CORRELATION_ID_HEADER)
    if ( preCorrelation !== undefined) {
      res.set(CORRELATION_ID_HEADER, preCorrelation)  
    } else {
      res.set(CORRELATION_ID_HEADER, id)
    }

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      this.logger.log(
        `[${method}][${originalUrl}][${statusCode}][${contentLength}] - [${userAgent}] [${ip}] [CORRELARION_ID:${res.get(CORRELATION_ID_HEADER)}]`,
      );
    });
    next();
  }
}

/* ---------------------------------------------- */
