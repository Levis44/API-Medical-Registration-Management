import { CreateDoctorDto } from './dtos/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';
import { EntityManager } from 'typeorm';
import { UpdateInfoDoctorDto } from './dtos/update-doctor-info.dto';
export declare class DoctorController {
    private doctorService;
    constructor(doctorService: DoctorService);
    createSpecialty(createDoctorDto: CreateDoctorDto, manager: EntityManager): Promise<Doctor>;
    listDoctors(): Promise<Doctor[]>;
    updateInfo(id: string, updateInfoDto: UpdateInfoDoctorDto, manager: EntityManager): Promise<Doctor>;
}
