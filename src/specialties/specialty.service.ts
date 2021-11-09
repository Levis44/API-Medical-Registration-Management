import { Injectable } from '@nestjs/common';
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
}
