import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';
import { EntityManager } from 'typeorm';
export declare class DoctorController {
    private doctorService;
    constructor(doctorService: DoctorService);
    createSpecialty(createDoctorDto: CreateDoctorDto, manager: EntityManager): Promise<Doctor>;
}
