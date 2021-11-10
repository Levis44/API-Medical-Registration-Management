import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { Specialty } from 'src/specialties/specialty.entity';
export declare class DoctorRepository extends Repository<Doctor> {
    createDoctor(createSoctorDto: CreateDoctorDto, specialties: Specialty[]): Promise<Doctor>;
}
