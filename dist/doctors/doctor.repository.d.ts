import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
export declare class DoctorRepository extends Repository<Doctor> {
    createDoctor(createSoctorDto: CreateDoctorDto): Promise<Doctor>;
}
