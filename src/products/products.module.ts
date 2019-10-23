import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductShema } from './schemas/product.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Product', schema: ProductShema },
    ])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
