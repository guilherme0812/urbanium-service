import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class CompaniesService {
  constructor(private prismaService: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prismaService.companies.create({ data: createCompanyDto });
  }

  findAll() {
    return this.prismaService.companies.findMany();
  }

  async findOne(id: number) {
    try {
      return this.prismaService.companies.findUniqueOrThrow({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`company with id ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    try {
      return await this.prismaService.companies.update({
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

  async remove(id: number) {
    try {
      return await this.prismaService.companies.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`company with ID ${id} not found`);
      }
      throw error;
    }
  }
}
