import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable } from 'rxjs';
import {
  ProductServices,
  RqCreateProduct,
  RsCreateProduct,
  RsFindProduct,
  RsFindProducts,
} from './product.pb';

/* -------------------------------------------------- */

@Controller('products')
export class ProductsController implements OnModuleInit {
  private srv: ProductServices;

  constructor(@Inject('PRODUCT_TRANSPORT') private client: ClientGrpc) {}

  /* ----------------- */

  onModuleInit() {
    this.srv = this.client.getService<ProductServices>('ProductServices');
  }

  /* ----------------- */

  @Get()
  async getProducts(): Promise<Observable<RsFindProducts>> {
    return this.srv.getProducts({});
  }

  /* ----------------- */

  @Post()
  private async createProduct(
    @Body() body: RqCreateProduct,
  ): Promise<Observable<RsCreateProduct>> {
    return this.srv.createProduct(body);
  }

  /* ----------------- */

  @Get(':id')
  private async getProduct(
    @Param('id') id: string,
  ): Promise<Observable<RsFindProduct>> {
    return this.srv.getProduct({ id });
  }
}

/* -------------------------------------------------- */
