import { PartialType } from '@nestjs/mapped-types';
import { CreateImmobilyDto } from './create-immobily.dto';

export class UpdateImmobilyDto extends PartialType(CreateImmobilyDto) {}
