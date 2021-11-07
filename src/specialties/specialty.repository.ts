import { EntityRepository, Repository } from 'typeorm';
import { CreateSpecialtyDto } from './dtos/create-specialty.dto';
import { Specialty } from './specialty.entity';

@EntityRepository(Specialty)
export class SpecialtyRepository extends Repository<Specialty> {
  async createSpecialty(
    createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<Specialty> {
    const { name } = createSpecialtyDto;

    const specialty = this.create({
      name,
    });

    await this.save(specialty);

    return specialty;
  }
}
