import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
      constructor(
        private readonly prisma: PrismaService
      ){}

      async create(name: string, price: number, stock: number) {
        const search = await this.prisma.product.findUnique({where: {name}});
        if(search)
          throw new BadRequestException("Product already exists");
        return this.prisma.product.create({
          data: {
            name,
            price,
            stock
          }
        });
      }
      async get() {
        return this.prisma.product.findMany();
      }



}
