import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

//Customs Pipe
import { ParseIntPipe} from '../../common/parse-int.pipe'

//Dtods
import {CreateProductDto , UpdateProductDto}  from '../../dtos/products.dtos'

import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  // @Get("filter")
  // getFilter(@Param("productId") productId : string) {
  //   return {
  //     "message" : `productoid : ${productId}`
  //   }
  // }

  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: string) {
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
