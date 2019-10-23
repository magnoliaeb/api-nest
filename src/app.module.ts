import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://magnoliaebv16:computadora@magnolia-3xvbr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  }), CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
