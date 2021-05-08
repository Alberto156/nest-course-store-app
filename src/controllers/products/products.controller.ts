import { Controller  , Get , Param , Query , Post , Body , Put, Delete ,  ParseIntPipe} from '@nestjs/common';

import {ProductsService} from "../../services/products/products.service"

@Controller('products')
export class ProductsController {

  constructor(private productsService : ProductsService){}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand : string,
  ) {
    
    return this.productsService.findAll();
  }

  // @Get("filter")
  // getFilter(@Param("productId") productId : string) {
  //   return {
  //     "message" : `productoid : ${productId}`
  //   }
  // }

  @Get(":productId")
  getOne(@Param("productId" , ParseIntPipe) productId : string) {
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(
    @Body() payload : any
  ){
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(+id , payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }

}
