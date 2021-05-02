import { Controller  , Get , Param , Query , Post , Body , Put, Delete} from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand : string,
  ) {
    return {
      "message" :  "get all products"
    }
  }

  @Get("filter")
  getFilter(@Param("productId") productId : string) {
    return {
      "message" : `productoid : ${productId}`
    }
  }

  @Get(":productId")
  getOne(@Param("productId") productId : string) {
    return {
      "message" : `productoid : ${productId}`
    }
  }

  @Post()
  create(
    @Body() payload : any
  ){
    return {
      "message" : "SUCCESS POST",
      payload
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }

}
