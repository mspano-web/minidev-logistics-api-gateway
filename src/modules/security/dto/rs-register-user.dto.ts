import { ApiProperty } from "@nestjs/swagger";
import { RsGenericHeaderDto } from "src/dto/rs-generic-header.dto";

/* -------------------------------------------------------- */

export class RsRegisterUserDataDto {
    @ApiProperty({
        type: Number,
        description: 'User Id',
      })
    id: number;
}

/* -------------------------------------------------------- */

export class RsRegisterUserDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsRegisterUserDataDto: RsRegisterUserDataDto;
}

/* -------------------------------------------------------- */
