import { CreateSpecialtyDto } from './dtos/create-specialty.dto';
import { Specialty } from './specialty.entity';
import { SpecialtyRepository } from './specialty.repository';
export declare class SpecialtyService {
    private specialtyRepository;
    constructor(specialtyRepository: SpecialtyRepository);
    createSpecialty(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>;
    listSpecialties(): Promise<Specialty[]>;
    deleteSpecialtyById(id: string): Promise<Specialty[]>;
}
