import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';
import { Specialty } from 'src/specialties/specialty.entity';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  name: string;

  @IsInt()
  @Max(9999999)
  crm: number;

  //cep: number;

  @IsArray()
  @ArrayMinSize(2)
  medicalSpecialty: Specialty[];
}
