import { ApiProperty } from '@nestjs/swagger';

/* ---------------------------------------------- */

export class RsGenericHeaderDto {
  @ApiProperty({
    type: Number,
    description: 'Status Code',
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    description: 'Message',
  })
  message?: string;
}

/* ---------------------------------------------- */
