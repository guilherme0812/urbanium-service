import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { ImmobiliesService } from './immobilies.service';
import { UpdateImmobileDto } from './dto/update-immobile.dto';
import { CreateImmobileDto } from './dto/create-immobile.dto';

@Controller('immobilies')
export class ImmobiliesController {
  constructor(private readonly immobiliesService: ImmobiliesService) {}

  @Post()
  create(@Body() createImmobilyDto: CreateImmobileDto) {
    return this.immobiliesService.create(createImmobilyDto);
  }

  @Get()
  findAll(@Query('companyId') companyId?: string) {
    return this.immobiliesService.findByCompany(companyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.immobiliesService.findOne(id);
  }

  @Put()
  update(
    @Query('id') id: string,
    @Body() updateImmobilyDto: UpdateImmobileDto,
  ) {
    return this.immobiliesService.update(id, updateImmobilyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.immobiliesService.remove(id);
  }
}
