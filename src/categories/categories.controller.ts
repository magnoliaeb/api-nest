import { Controller, Get, Param, Res, Post, Body, HttpStatus, Delete, Put, Patch } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
    @Get()
    async getCategories(@Res() res) {
        const categories = await  this.categoriesService.getCategories();
        res.status(HttpStatus.OK).json({
            categories,
        });
    }
    @Get(':id')
    async getCategory(@Param() param, @Res() res) {
        const { id }  = param;
        const category = await this.categoriesService.getCategory(id);
        res.status(HttpStatus.OK).json(category);
    }
    @Post()
    async createCategory(@Body() categoryDto: CategoryDto, @Res() res) {
        const category = await this.categoriesService.createCategory(categoryDto);
        res.status(HttpStatus.CREATED).json({
            message: 'Categoria creada',
            category,
        });
    }
    @Delete(':id')
    async deleteCategory(@Param() param, @Res() res) {
        const { id } = param;
        const category = await this.categoriesService.deleteCategory(id);
        res.status(HttpStatus.OK).json({
            message: 'Categoria creada',
            category,
        });
    }
    @Put(':id')
    async updateCategory(@Param() param, @Body() categoryDto: CategoryDto, @Res() res) {
        const { id } = param;
        const category = await this.categoriesService.updateCategory(id, categoryDto);
        res.status(HttpStatus.OK).json({
            message: 'Categoria uptualizada',
            category,
        });
    }
    // @Patch(':id')
    // async updateStatus (@Param() param , @Res() res) {
    //     const { id } = param;
    //     const category = await this.categoriesService.updateStatus(id);
    //     res.status(HttpStatus.OK).json({
    //         message: 'Estado de la categoria actualizado',
    //         category,
    //     });
    // }

}
