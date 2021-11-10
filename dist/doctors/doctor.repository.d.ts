import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dtos/create-doctor.dto';
export declare class DoctorRepository extends Repository<Doctor> {
    createSpecialty(createSoctorDto: CreateDoctorDto): Promise<Doctor>;
}
