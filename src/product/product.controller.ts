import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @Post("create")
    async createProduct(@Body() createProductDto: {name: string, price: number, stock: number}) {
            const { name, price, stock } = createProductDto;
            return this.productService.create(name, price, stock);
            
    }

    @Get()
    async getProducts() {
        return this.productService.get();
    }
}
