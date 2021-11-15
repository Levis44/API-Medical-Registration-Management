import { IsArray } from 'class-validator';
import { Specialty } from 'src/specialties/specialty.entity';

export class UpdateMedicalSpecialtyDto {
  @IsArray()
  medicalSpecialty: Specialty[];
}
