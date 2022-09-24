import { ApiProperty } from "@nestjs/swagger";
import { RsGenericHeaderDto } from "src/dto/rs-generic-header.dto";

/* --------------------------------------------------------------------- */

export class RsLoginUserDataDto {
    @ApiProperty({
        type: Number,
        description: 'Status Code',
      })
    statusCode: number;
    @ApiProperty({
        type: String,
        description: 'Message',
      })
    message: string;
    @ApiProperty({
        type: String,
        description: 'Session Token',
    })
    session_token: string;
    @ApiProperty({
        type: Number,
        description: 'User Id',
      })
    user_id: number;
    @ApiProperty({
        type: Number,
        description: 'Role Id',
      })
    role_id: number;
}

/* --------------------------------------------------------------------- */

export class RsLoginUserDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsLoginUserData: RsLoginUserDataDto;
}

/* --------------------------------------------------------------------- */
