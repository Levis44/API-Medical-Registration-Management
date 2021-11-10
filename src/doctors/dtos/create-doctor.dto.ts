import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Specialty } from 'src/specialties/specialty.entity';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  name: string;

  @IsInt()
  @MaxLength(7)
  crm: number;

  //cep: number;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @Type(() => Specialty)
  medicalSpecialty: Specialty[];
}
