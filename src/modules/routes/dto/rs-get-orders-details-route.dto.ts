import { RsGenericHeaderDto } from "src/dto/rs-generic-header.dto";

/* ------------------- */

export class RsRouteOrderDetailDto {
    product_id: string;
    description: string;
    quantity: number;
}

/* ------------------- */

export class RsGetRouteOrdersDetailsDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsRouteDetailDto: RsRouteOrderDetailDto[];

  constructor(
    rsGenericHeaderDto: RsGenericHeaderDto,
    rsRouteDetailDto: RsRouteOrderDetailDto[],
  ) {
    this.rsGenericHeaderDto = rsGenericHeaderDto;
    this.rsRouteDetailDto = rsRouteDetailDto;
  }
}

/* ------------------------------------------ */
