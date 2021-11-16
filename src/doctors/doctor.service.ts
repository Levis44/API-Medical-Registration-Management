import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { DoctorRepository } from './doctor.repository';
import { EntityManager } from 'typeorm';
import { Specialty } from 'src/specialties/specialty.entity';
import { UpdateInfoDoctorDto } from './dtos/update-doctor-info.dto';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import axios from 'axios';

@Injectable()
export class DoctorService extends TypeOrmQueryService<Doctor> {
  constructor(
    @InjectRepository(DoctorRepository)
    private doctorRepository: DoctorRepository,
  ) {
    super(doctorRepository, { useSoftDelete: true });
  }

  async createDoctor(
    manager: EntityManager,
    createDoctorDto: CreateDoctorDto,
  ): Promise<Doctor> {
    const { medicalSpecialty } = createDoctorDto;

    const medicalSpecialties = await this.validateSpecialties(
      manager,
      medicalSpecialty,
    );

    return this.doctorRepository.createDoctor(
      createDoctorDto,
      medicalSpecialties,
    );
  }

  async listDoctors() {
    const doctors = await this.doctorRepository.find({
      relations: ['medicalSpecialty'],
    });

    const formattedDoctors = [];

    for (const _doctor of doctors) {
      const cepResponse = await axios({
        method: 'post',
        url: 'https://correios.contrateumdev.com.br/api/cep',
        data: { cep: _doctor.cep.toString() },
      });

      _doctor.cep = cepResponse.data;

      formattedDoctors.push(_doctor);
    }

    return formattedDoctors;
  }

  async updateInfo(
    id: string,
    updateInfoDto: UpdateInfoDoctorDto,
    manager: EntityManager,
  ): Promise<Doctor> {
    const { medicalSpecialty } = updateInfoDto;

    const doctor = await this.doctorRepository.findOne({ id });

    if (!doctor) {
      throw new ConflictException('Doctor does not exists');
    }
    if (medicalSpecialty) {
      const medicalSpecialties = await this.validateSpecialties(
        manager,
        medicalSpecialty,
      );

      return this.doctorRepository.save(
        Object.assign(doctor, {
          ...updateInfoDto,
          medicalSpecialty: medicalSpecialties,
        }),
      );
    }

    return this.doctorRepository.save(Object.assign(doctor, updateInfoDto));
  }

  async validateSpecialties(
    manager: EntityManager,
    medicalSpecialty,
  ): Promise<Specialty[]> {
    const medicalSpecialties: Specialty[] = await manager.findByIds(
      Specialty,
      medicalSpecialty,
    );

    if (medicalSpecialties.length < medicalSpecialty.length) {
      throw new ConflictException('Specialty does not exists');
    }

    return medicalSpecialties;
  }

  async deleteDoctor(id: string) {
    const doctor = await this.doctorRepository.findOne(id);

    if (!doctor) {
      throw new NotFoundException(
        `Impossible to delete the Doctor with ID: ${id} because it was not found`,
      );
    }

    await this.doctorRepository.softRemove(doctor);
  }

  searchDoctor(search: string): Promise<Doctor[]> {
    return this.doctorRepository.searchDoctor(search);
  }
}
