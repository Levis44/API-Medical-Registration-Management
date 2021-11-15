import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
import { EntityManager } from 'typeorm';
import { Specialty } from 'src/specialties/specialty.entity';
import { UpdateInfoDoctorDto } from './dtos/update-doctor-info.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorRepository)
    private doctorRepository: DoctorRepository,
  ) {}

  async createDoctor(
    manager: EntityManager,
    createDoctorDto: CreateDoctorDto,
  ): Promise<Doctor> {
    const { medicalSpecialty } = createDoctorDto;

    const medicalSpecialties: Specialty[] = await manager.findByIds(
      Specialty,
      medicalSpecialty,
    );

    if (medicalSpecialties.length < medicalSpecialty.length) {
      throw new ConflictException('Specialty does not exists');
    }

    return this.doctorRepository.createDoctor(
      createDoctorDto,
      medicalSpecialties,
    );
  }

  async listDoctors() {
    return await this.doctorRepository.find({
      relations: ['medicalSpecialty'],
    });
  }

  async updateInfo(id: string, updateInfo: UpdateInfoDoctorDto) {
    const doctor = await this.doctorRepository.findOneOrFail({ id });

    return this.doctorRepository.save(Object.assign(doctor, updateInfo));
  }
}
