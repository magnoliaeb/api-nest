import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { Product } from './interface/product.interface';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Get()
    async getProducts(@Res() res) {
       const products =  await this.productsService.getProducts();
       res.status(HttpStatus.OK).json({
           products,
       });
    }
    @Get(':id')
    async getProduct(@Param() param, @Res() res) {
        const { id } = param;
        // console.log(id);
        const product = await this.productsService.getProduct(id);
        res.status(HttpStatus.OK).json(product);
    }
    // @Post()
    // async createProduct(@Body() product: ProductDto, @Res() res) {
    //     const product = await this.productsService.createProduct(product);
    //     res.status(HttpStatus.OK).json({
    //         message: 'Producto creado con exito',
    //         product,
    //     });
    // }
    // @Put(':id')
    // updateProduct(@Body() product, @Param() param): string {
    //     const { id } = param;
    //     return 'Actualizando un producto';
    // }
    // @Delete(':id')
    // deleteProduct(@Param() param): string {
    //     const { id } = param;
    //     return `Eliminando el producto ${id}`;
    // }
}
