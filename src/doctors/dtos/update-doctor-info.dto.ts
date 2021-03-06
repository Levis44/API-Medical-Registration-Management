import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Specialty } from 'src/specialties/specialty.entity';

export class UpdateInfoDoctorDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  name?: string;

  @IsOptional()
  @IsNumber()
  crm?: number;

  @IsOptional()
  @IsNumberString()
  cellphoneNumber?: string;

  @IsOptional()
  @IsNumberString()
  phoneNumber?: string;

  @IsOptional()
  @IsNumber()
  cep?: number;

  @IsOptional()
  @IsArray()
  medicalSpecialty?: Specialty[];
}
