import { EntityRepository, Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dtos/create-doctor.dto';

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  async createSpecialty(createSoctorDto: CreateDoctorDto): Promise<Doctor> {
    const { name, crm, medicalSpecialty } = createSoctorDto;

    return await this.save({
      name,
      crm,
      medicalSpecialty,
    });
  }
}
