import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryDto } from './dto/category.dto';
import { Category } from './interface/category.interface';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel('Category') private categoryModel: Model<Category>) {}

    async getCategories(): Promise<Category[]> {
        const catgories = await this.categoryModel.find();
        return catgories;
    }

    async getCategory(id: string): Promise<Category> {
        const catgeory = await this.categoryModel.findById(id);
        return catgeory;
    }
    async deleteCategory(id: string): Promise<Category> {
        const category = await this.categoryModel.findByIdAndDelete(id);
        return category;
    }
    async createCategory(categoryDto: CategoryDto): Promise<Category> {
        const category = await new this.categoryModel(categoryDto);
        await category.save();
        return category;
    }

    async updateCategory(id: string, categoryDto: CategoryDto): Promise<Category> {
        const category = await this.categoryModel.findByIdAndUpdate(id, categoryDto, {
            new: true,
        });
        return category;
    }
    // async updateStatus(id: string): Promise<any> {
    //     const category = await this.categoryModel.findById(id);
    //     if (category.status === true) {
    //         category.status = false;
    //     } else {
    //         category.status = true;
    //     }
    //     category.save();
    // }
}
