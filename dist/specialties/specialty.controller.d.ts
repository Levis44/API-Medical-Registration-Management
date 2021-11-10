import { CreateSpecialtyDto } from './dtos/create-specialty.dto';
import { UpdateSpecialtyDto } from './dtos/update-specialty.dto';
import { Specialty } from './specialty.entity';
import { SpecialtyService } from './specialty.service';
export declare class SpecialtyController {
    private specialtyService;
    constructor(specialtyService: SpecialtyService);
    createSpecialty(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>;
    listSpecialties(): Promise<Specialty[]>;
    deleteSpecialtyById(id: string): Promise<Specialty[]>;
    updateSpecialty(id: string, updateSpecialtyDto: UpdateSpecialtyDto): Promise<Specialty>;
}
