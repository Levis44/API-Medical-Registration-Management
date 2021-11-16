import { EntityRepository, Repository } from 'typeorm';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { Specialty } from 'src/specialties/specialty.entity';
import { ConflictException } from '@nestjs/common';

@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor> {
  async createDoctor(
    createDoctorDto: CreateDoctorDto,
    specialties: Specialty[],
  ): Promise<Doctor> {
    const { name, crm, phoneNumber, cellphoneNumber, cep } = createDoctorDto;

    const doctorAlreadyExists = await this.findOne({ name });

    if (doctorAlreadyExists) {
      throw new ConflictException('Doctor already exists');
    }

    const doctor = this.create({
      name,
      crm,
      phoneNumber,
      cellphoneNumber,
      cep,
      medicalSpecialty: specialties,
    });

    return await this.save(doctor);
  }

  async searchDoctor(search: string): Promise<Doctor[]> {
    return this.createQueryBuilder('doctor')
      .andWhere(
        `LOWER(doctor.name) LIKE LOWER(:search) OR
       LOWER(doctor.cellphoneNumber) LIKE LOWER(:search) OR
       LOWER(doctor.phoneNumber) LIKE LOWER(:search)`,

        { search: `%${search}%` },
      )
      .getMany();
  }
}
