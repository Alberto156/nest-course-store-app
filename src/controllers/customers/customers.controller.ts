import { Controller, Get  , Param , Query} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAlls(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand : string,
  ) {
    return {
      "message" :  "get all  customers"
    }
  }

  @Get("filter")
  getFilter(@Param("customersId") customersId : string) {
    return {
      "message" : `customersId : ${customersId}`
    }
  }

  @Get(":customersId")
  getOne(@Param("customersId") customersId : string) {
    return {
      "message" : `customersId : ${customersId}`
    }
  }
}
