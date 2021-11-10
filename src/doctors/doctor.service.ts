import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
import { EntityManager } from 'typeorm';
import { Specialty } from 'src/specialties/specialty.entity';

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
      throw new ConflictException('ERROR');
    }

    return this.doctorRepository.createDoctor(
      createDoctorDto,
      medicalSpecialties,
    );
  }
}
