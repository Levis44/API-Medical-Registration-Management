import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  MaxLength,
} from 'class-validator';
import { Specialty } from 'src/specialties/specialty.entity';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  name: string;

  @IsNumber()
  crm: number;

  @IsNumberString()
  cellphoneNumber: string;

  @IsNumberString()
  phoneNumber: string;

  @IsNumber()
  cep: number;

  @IsArray()
  @ArrayMinSize(2)
  medicalSpecialty: Specialty[];
}
