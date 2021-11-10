import { EntityRepository, Repository } from 'typeorm';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { Specialty } from 'src/specialties/specialty.entity';

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  async createDoctor(
    createSoctorDto: CreateDoctorDto,
    specialties: Specialty[],
  ): Promise<Doctor> {
    const { name, crm } = createSoctorDto;

    return await this.save({
      name,
      crm,
      specialties,
    });
  }
}
