import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { ProductDto } from './dto/product.dto';
@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private productModel: Model<Product>) { }

    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find({ order: { id: 'DESC'}});
        return products;
    }
    async getProduct(id: string): Promise<Product> {
        const product = await this.productModel.findById(id);
        return product;
    }
    async createProduct(product: ProductDto): Promise<Product> {
        const newProduct = await new this.productModel(product);
        await newProduct.save();
        return newProduct;
    }

    async deleteProduct(id: string): Promise<Product> {
        const deleteProduct = await this.productModel.findByIdAndDelete(id);
        return deleteProduct;
    }

    async updateProduct(id: string, product: ProductDto): Promise<Product> {
        const updateProduct = await this.productModel.findByIdAndUpdate(id, product, { new: true });
        return updateProduct;
    }



}
