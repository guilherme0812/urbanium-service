import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private prismaService: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prismaService.companies.create({ data: createCompanyDto });
  }

  findAll() {
    return this.prismaService.companies.findMany();
  }

  findOne(id: number) {
    return this.prismaService.companies.findUnique({ where: { id } });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
