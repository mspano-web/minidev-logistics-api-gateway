/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * This file is auto-generated by nestjs-proto-gen-ts
 */

import { Observable } from 'rxjs';

export interface ProductServices {
  getProduct(request: RqFindProduct): Observable<RsFindProduct>;
  getProducts(request: RqFindProducts): Observable<RsFindProducts>;
  createProduct(request: RqCreateProduct): Observable<RsCreateProduct>;
}

export interface ProductData {
  id?: string;
  description?: string;
  weight?: number;
  volume?: number;
  price?: number;
}
export interface RqFindProduct {
  id?: string;
}
export interface RsFindProduct {
  status?: number;
  error?: string;
  data?: ProductData;
}
export interface RqFindProducts {}

export interface RsFindProducts {
  status?: number;
  error?: string;
  data?: ProductData[];
}
export interface RqCreateProduct {
  description?: string;
  weight?: number;
  volume?: number;
  price?: number;
}
export interface RsCreateProduct {
  status?: number;
  error?: string;
  id?: string;
}
