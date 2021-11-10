import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';
export declare class DoctorController {
    private doctorService;
    constructor(doctorService: DoctorService);
    createSpecialty(createDoctorDto: CreateDoctorDto): Promise<Doctor>;
}
