import { Specialty } from 'src/specialties/specialty.entity';
export declare class CreateDoctorDto {
    name: string;
    crm: number;
    cellphoneNumber: string;
    phoneNumber: string;
    cep: number;
    medicalSpecialty: Specialty[];
}
