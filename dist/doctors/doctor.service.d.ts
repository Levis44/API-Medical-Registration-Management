import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
import { EntityManager } from 'typeorm';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: DoctorRepository);
    createDoctor(manager: EntityManager, createDoctorDto: CreateDoctorDto): Promise<Doctor>;
    listDoctors(): Promise<Doctor[]>;
}
