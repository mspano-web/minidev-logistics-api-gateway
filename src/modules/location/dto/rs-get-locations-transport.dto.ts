
import { PointDto } from "./rq-create-location.dto";

export class RsGetLocationsTransportDto {
    statusCode: number;
    message: string;
    position: PointDto[];
}
