import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ImmobiliesService } from './immobilies.service';
import { CreateImmobilyDto } from './dto/create-immobily.dto';
import { UpdateImmobilyDto } from './dto/update-immobily.dto';

@Controller('immobilies')
export class ImmobiliesController {
  constructor(private readonly immobiliesService: ImmobiliesService) {}

  @Post()
  create(@Body() createImmobilyDto: CreateImmobilyDto) {
    return this.immobiliesService.create(createImmobilyDto);
  }

  @Get()
  findAll(@Query('companyId') companyId?: string) {
    return this.immobiliesService.findByCompany(companyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.immobiliesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateImmobilyDto: UpdateImmobilyDto,
  ) {
    return this.immobiliesService.update(+id, updateImmobilyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.immobiliesService.remove(+id);
  }
}
