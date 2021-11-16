import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
import { EntityManager } from 'typeorm';
import { Specialty } from 'src/specialties/specialty.entity';
import { UpdateInfoDoctorDto } from './dtos/update-doctor-info.dto';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
export declare class DoctorService extends TypeOrmQueryService<Doctor> {
    private doctorRepository;
    constructor(doctorRepository: DoctorRepository);
    createDoctor(manager: EntityManager, createDoctorDto: CreateDoctorDto): Promise<Doctor>;
    listDoctors(): Promise<any[]>;
    updateInfo(id: string, updateInfoDto: UpdateInfoDoctorDto, manager: EntityManager): Promise<Doctor>;
    validateSpecialties(manager: EntityManager, medicalSpecialty: any): Promise<Specialty[]>;
    deleteDoctor(id: string): Promise<void>;
    searchDoctor(search: string): Promise<Doctor[]>;
}
