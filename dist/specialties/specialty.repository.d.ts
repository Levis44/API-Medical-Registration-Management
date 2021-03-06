import { Repository } from 'typeorm';
import { CreateSpecialtyDto } from './dtos/create-specialty.dto';
import { Specialty } from './specialty.entity';
export declare class SpecialtyRepository extends Repository<Specialty> {
    createSpecialty(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>;
}
