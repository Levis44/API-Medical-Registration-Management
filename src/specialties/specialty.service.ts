import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSpecialtyDto } from './dtos/create-specialty.dto';
import { Specialty } from './specialty.entity';
import { SpecialtyRepository } from './specialty.repository';

@Injectable()
export class SpecialtyService {
  constructor(
    @InjectRepository(SpecialtyRepository)
    private specialtyRepository: SpecialtyRepository,
  ) {}

  createSpecialty(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty> {
    return this.specialtyRepository.createSpecialty(createSpecialtyDto);
  }

  listSpecialties(): Promise<Specialty[]> {
    return this.specialtyRepository.find({ select: ['name'] });
  }

  async deleteSpecialtyById(id: string): Promise<Specialty[]> {
    const specialty = await this.specialtyRepository.findOne(id);

    if (!specialty) {
      throw new NotFoundException(
        `Impossible to delete the Specialty with ID: ${id} because it was not found`,
      );
    }

    await this.specialtyRepository.remove(specialty);

    return this.listSpecialties();
  }
}
