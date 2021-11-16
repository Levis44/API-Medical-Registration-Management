import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { Specialty } from 'src/specialties/specialty.entity';
export declare class DoctorRepository extends Repository<Doctor> {
    createDoctor(createDoctorDto: CreateDoctorDto, specialties: Specialty[]): Promise<Doctor>;
    searchDoctor(search: string): Promise<Doctor[]>;
}
