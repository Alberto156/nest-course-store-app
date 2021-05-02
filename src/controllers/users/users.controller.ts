import { Controller  , Get , Param , Query , Post , Body} from '@nestjs/common';

@Controller('users')
export class UsersController {
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
  getFilter(@Param("usersId") usersId : string) {
    return {
      "message" : `usersId : ${usersId}`
    }
  }

  @Get(":usersId")
  getOne(@Param("usersId") usersId : string) {
    return {
      "message" : `usersId : ${usersId}`
    }
  }
}
