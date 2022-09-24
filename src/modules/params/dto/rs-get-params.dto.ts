export class ParamsDto {
  key: string;
  value: string;
}

/* ----------------- */

export class RsGetParamsDto {
  statusCode: number;
  message: string;
  paramsDto: ParamsDto[];
}

/* ----------------- */
