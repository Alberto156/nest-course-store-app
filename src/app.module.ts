import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './services/products/products.service';


@Module({
  imports: [],
  controllers: [
    AppController,
    OrdersController,
    CustomersController,
    CategoriesController,
    ProductsController,
    BrandsController,
    UsersController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}


