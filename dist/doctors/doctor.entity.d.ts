import { Specialty } from 'src/specialties/specialty.entity';
export declare class Doctor {
    id: string;
    name: string;
    crm: number;
    medicalSpecialty: Specialty[];
}
