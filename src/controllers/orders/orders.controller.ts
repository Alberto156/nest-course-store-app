import { Controller, Get  , Param , Query} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAlls(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand : string,
  ) {
    return {
      "message" :  "get all  ordes"
    }
  }

  @Get("filter")
  getFilter(@Param("ordersId") ordersId : string) {
    return {
      "message" : `ordersId : ${ordersId}`
    }
  }

  @Get(":ordersId")
  getOne(@Param("ordersId") ordersId : string) {
    return {
      "message" : `ordersId : ${ordersId}`
    }
  }
}
