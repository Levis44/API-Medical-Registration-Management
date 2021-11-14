import { EntityRepository, Repository } from 'typeorm';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { Specialty } from 'src/specialties/specialty.entity';
import { ConflictException } from '@nestjs/common';

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  async createDoctor(
    createSoctorDto: CreateDoctorDto,
    specialties: Specialty[],
  ): Promise<Doctor> {
    const { name, crm } = createSoctorDto;

    const userAlreadyExists = this.findOne({ name });

    if (userAlreadyExists) {
      throw new ConflictException('Doctor already exists');
    }

    const user = this.create({ name, crm, medicalSpecialty: specialties });

    return await this.save(user);
  }
}
