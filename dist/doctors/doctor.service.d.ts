import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: DoctorRepository);
    createDoctor(createDoctorDto: CreateDoctorDto): Promise<Doctor>;
}
