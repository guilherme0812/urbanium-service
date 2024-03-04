import { Injectable } from '@nestjs/common';
import { CreateImmobilyDto } from './dto/create-immobily.dto';
import { UpdateImmobilyDto } from './dto/update-immobily.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImmobiliesService {
  constructor(private prismaService: PrismaService) {}

  create(createImmobilyDto: CreateImmobilyDto) {
    return 'This action adds a new immobily';
  }

  findAll() {
    return `This action returns all immobilies`;
  }

  findByCompany(companyId?: string) {
    return this.prismaService.immobile.findMany({
      where: { company_id: companyId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} immobily`;
  }

  update(id: number, updateImmobilyDto: UpdateImmobilyDto) {
    return `This action updates a #${id} immobily`;
  }

  remove(id: number) {
    return `This action removes a #${id} immobily`;
  }
}
