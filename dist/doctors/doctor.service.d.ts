import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
import { EntityManager } from 'typeorm';
import { Specialty } from 'src/specialties/specialty.entity';
import { UpdateInfoDoctorDto } from './dtos/update-doctor-info.dto';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: DoctorRepository);
    createDoctor(manager: EntityManager, createDoctorDto: CreateDoctorDto): Promise<Doctor>;
    listDoctors(): Promise<Doctor[]>;
    updateInfo(id: string, updateInfoDto: UpdateInfoDoctorDto, manager: EntityManager): Promise<Doctor>;
    validateSpecialties(manager: EntityManager, medicalSpecialty: any): Promise<Specialty[]>;
}
