import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class ListAllQueries {
  @IsUUID('4')
  @IsString()
  @IsOptional()
  id: string;

  @IsUUID('4')
  @IsNotEmpty()
  company_id: string;
}
