import { Controller, Get  , Param , Query} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get()
  getAlls(
    @Query('limit') categoryId: string,
     @Query('offset') id: string,
     @Query('brand') brand : string)
    {
    return {
      "message" :  `get all categories`
    }
  }

  @Get(':categoryId')
  getOne(@Param('categoryId') categoryId: string, @Param('id') id: string) {
    return {
      "message" : `categoryID : ${categoryId} `
    }
  }

  @Get(':id/products/:productId')
  getProductsCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return {
      "message" : `categoryID : ${id} productoID = ${productId}`
    }
  }

}
