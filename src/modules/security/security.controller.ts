import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpStatus,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { ApiTags, ApiOperation, ApiResponse, ApiBody,  } from '@nestjs/swagger';

import { map, Observable, timeout } from 'rxjs';
import { JwtTokens } from './services/jwt-tokens.service';

import {
  RqLoginUserDto,
  RqRegisterUserDto,
  RsLoginUserDto,
  RsRegisterUserDto,
} from './dto';

/* --------------------------------------------------- */

@ApiTags('Security') // To grouping endpoints
@Controller('security')
// ClassSerializerInterceptor  to automatically cast your returned Entity instances
//   from services into the proper returned type defined in your controller's method.
@UseInterceptors(ClassSerializerInterceptor)
export class SecurityController {
  constructor(
    @Inject('AUTH_TRANSPORT') private readonly security_user: ClientProxy,
    private readonly jwtTokens: JwtTokens,
    private readonly configService: ConfigService,
  ) {}

  /* -------------------- */

  @Post('login')
  @ApiOperation({ summary: 'Login User'} )
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Login Succesfully.',
    type: RsLoginUserDto,
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN,description: 'Invalid user-password.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND,description: 'Invalid user.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR ,description: 'Failed to login user.' })
  @ApiBody({ type: RqLoginUserDto })
  async loginUser(
    @Body() loginUserDto: RqLoginUserDto,
  ): Promise<Observable<RsLoginUserDto>> {
    return this.security_user
      .send<RsLoginUserDto>('ms-security-login', loginUserDto)
      .pipe(
        map((x) => {
          if (x.rsGenericHeaderDto.statusCode === HttpStatus.OK) {
            x.rsLoginUserData.session_token = this.jwtTokens.jwtTokenGenerate(
              x.rsLoginUserData.user_id.toString(),
              loginUserDto.username,
            );
          }
          return x;
        }),
      )
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }

  /* -------------------- */

  @Post('register')
  @ApiOperation({ summary: 'Register User' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Register Succesfully.',
    type: RsRegisterUserDto,
  })
  @ApiResponse({ status: HttpStatus.FOUND, description: 'Inconsistency detected. Security information previously registered for the user.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Failed to register user.' })
  @ApiBody({ type: RqRegisterUserDto })
  async registerUser(
    @Body() registerUserDto: RqRegisterUserDto,
  ): Promise<Observable<RsRegisterUserDto>> {
    return this.security_user
      .send('ms-security-register', registerUserDto)
      .pipe(timeout(+this.configService.get('TCP_RESPONSE_TIMEOUT')));
  }
}

/* --------------------------------------------------- */
