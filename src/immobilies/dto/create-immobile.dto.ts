import {
  IsString,
  IsBoolean,
  IsInt,
  IsOptional,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';

enum Availability {
  SALE = 'SALE',
  MONTHLY_RENTAL = 'MONTHLY_RENTAL',
  DAILY_RENTAL = 'DAILY_RENTAL',
}

export class CreateImmobileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsString()
  @IsNotEmpty()
  availability: Availability;

  @IsInt()
  @IsNotEmpty()
  num_bedrooms: number;

  @IsInt()
  @IsNotEmpty()
  num_bathrooms: number;

  @IsInt()
  @IsNotEmpty()
  num_air_conditioners: number;

  @IsInt()
  @IsNotEmpty()
  num_parking_spaces: number;

  @IsInt()
  @IsNotEmpty()
  num_maximum_occupancy: number;

  @IsInt()
  @IsNotEmpty()
  num_kitchen: number;

  @IsBoolean()
  @IsNotEmpty()
  wifi: boolean;

  @IsBoolean()
  @IsNotEmpty()
  pool: boolean;

  @IsString()
  @IsNotEmpty()
  xCoordinate: string;

  @IsString()
  @IsNotEmpty()
  yCoordinate: string;

  @IsOptional()
  @IsInt()
  country_id?: number;

  @IsOptional()
  @IsInt()
  district_id?: number;

  @IsOptional()
  @IsInt()
  city_id?: number;

  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;
}
