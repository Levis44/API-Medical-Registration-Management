import { EntityRepository, Repository } from 'typeorm';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  async createDoctor(createSoctorDto: CreateDoctorDto): Promise<Doctor> {
    const { name, crm, medicalSpecialty } = createSoctorDto;

    return await this.save({
      name,
      crm,
      medicalSpecialty,
    });
  }
}
