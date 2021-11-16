import { IsString } from 'class-validator';

export class FilterDoctorsDto {
  @IsString()
  search: string;
}
