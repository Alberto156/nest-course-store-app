import { Controller  , Get , Param , Query , Post , Body} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAlls(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand : string,
  ) {
    return {
      "message" :  "get all  brands"
    }
  }

  @Get("filter")
  getFilter(@Param("brandId") brandId : string) {
    return {
      "message" : `brandId : ${brandId}`
    }
  }

  @Get(":brandId")
  getOne(@Param("brandId") brandId : string) {
    return {
      "message" : `brandId : ${brandId}`
    }
  }

}
