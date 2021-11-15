import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
import { EntityManager } from 'typeorm';
import { UpdateInfoDoctorDto } from './dtos/update-doctor-info.dto';
import { UpdateMedicalSpecialtyDto } from './dtos/update-medicalSpecialty.dto';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: DoctorRepository);
    createDoctor(manager: EntityManager, createDoctorDto: CreateDoctorDto): Promise<Doctor>;
    listDoctors(): Promise<Doctor[]>;
    updateInfo(id: string, updateInfoDto: UpdateInfoDoctorDto): Promise<Doctor>;
    updateMedicalSpecialty(id: string, updateMedicalSpecialtyDto: UpdateMedicalSpecialtyDto, manager: EntityManager): Promise<Doctor>;
}
