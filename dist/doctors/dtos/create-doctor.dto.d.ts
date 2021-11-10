import { Specialty } from 'src/specialties/specialty.entity';
export declare class CreateDoctorDto {
    name: string;
    crm: number;
    medicalSpecialty: Specialty[];
}
