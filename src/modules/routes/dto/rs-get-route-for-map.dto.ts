import { RsGenericHeaderDto } from "src/dto/rs-generic-header.dto";

/* ------------------------------------------ */

export class RoutesDetailsEntity {
  order_id: number;
}

/* --------------- */

export class RsRouteDetailDto {
    transport_id: number;
    origin_id: number;
    destination_id: number;
    zone_id: number;
    time_started: Date;
    time_end: Date;
    routesDetails: RoutesDetailsEntity[]
}

/* --------------- */

export class RsGetRouteForMapDto {
  
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsRouteDetailDto: RsRouteDetailDto;

  constructor(
    rsGenericHeaderDto: RsGenericHeaderDto,
    rsRouteDetailDto: RsRouteDetailDto,
  ) {
    this.rsGenericHeaderDto = rsGenericHeaderDto;
    this.rsRouteDetailDto = rsRouteDetailDto;
  }

}

/* ------------------------------------------ */
