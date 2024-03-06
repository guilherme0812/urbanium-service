import { Injectable } from '@nestjs/common';
import { UpdateImmobileDto } from './dto/update-immobile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImmobileDto } from './dto/create-immobile.dto';
import { NotFoundError } from 'src/errors';
import { ListAllQueries } from './dto/ListAllQueries';
import { Prisma } from '@prisma/client';

@Injectable()
export class ImmobiliesService {
  constructor(private prismaService: PrismaService) {}

  create(body: CreateImmobileDto) {
    return this.prismaService.immobile.create({
      data: {
        name: body.name,
        description: body.description,
        active: body.active,
        availability: body.availability,
        num_bedrooms: body.num_bedrooms,
        num_bathrooms: body.num_bathrooms,
        num_air_conditioners: body.num_air_conditioners,
        num_parking_spaces: body.num_parking_spaces,
        num_maximum_occupancy: body.num_maximum_occupancy,
        num_kitchen: body.num_kitchen,
        wifi: body.wifi,
        pool: body.pool,
        xCoordinate: body.xCoordinate,
        yCoordinate: body.yCoordinate,
        country_id: body.country_id,
        district_id: body.district_id,
        city_id: body.city_id,
        company_id: body.company_id,
      },
    });
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.immobile.findUniqueOrThrow({
        where: { id: id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`company with id ${id} not found`);
      }
      throw error;
    }
  }

  async findAll(queryParams: ListAllQueries) {
    const { company_id, id } = queryParams;
    const query: Prisma.ImmobileFindManyArgs = {
      where: {
        ...(company_id && { company_id }),
        ...(id && { id }),
      },
    };
    try {
      return await this.prismaService.immobile.findMany(query);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`not found`);
      }
      throw error;
    }
  }

  async update(id: string, body: UpdateImmobileDto) {
    try {
      return await this.prismaService.immobile.update({
        where: { id },
        data: {
          name: body.name,
          description: body.description,
          active: body.active,
          availability: body.availability,
          num_bedrooms: body.num_bedrooms,
          num_bathrooms: body.num_bathrooms,
          num_air_conditioners: body.num_air_conditioners,
          num_parking_spaces: body.num_parking_spaces,
          num_maximum_occupancy: body.num_maximum_occupancy,
          num_kitchen: body.num_kitchen,
          wifi: body.wifi,
          pool: body.pool,
          xCoordinate: body.xCoordinate,
          yCoordinate: body.yCoordinate,
          country_id: body.country_id,
          district_id: body.district_id,
          city_id: body.city_id,
          company_id: body.company_id,
        },
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
      return await this.prismaService.immobile.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`immobile with ID ${id} not found`);
      }
      throw error;
    }
  }
}
