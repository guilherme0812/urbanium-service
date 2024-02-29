import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class CompaniesService {
  constructor(private prismaService: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prismaService.company.create({ data: createCompanyDto });
  }

  findAll() {
    return this.prismaService.company.findMany();
  }

  async findOne(id: string) {
    try {
      return this.prismaService.company.findUniqueOrThrow({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`company with id ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    try {
      return await this.prismaService.company.update({
        where: { id },
        data: updateCompanyDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`company with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.company.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`company with ID ${id} not found`);
      }
      throw error;
    }
  }
}
