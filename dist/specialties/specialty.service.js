"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const specialty_repository_1 = require("./specialty.repository");
let SpecialtyService = class SpecialtyService {
    constructor(specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }
    createSpecialty(createSpecialtyDto) {
        return this.specialtyRepository.createSpecialty(createSpecialtyDto);
    }
    listSpecialties() {
        return this.specialtyRepository.find();
    }
    async deleteSpecialtyById(id) {
        const specialty = await this.specialtyRepository.findOne(id);
        if (!specialty) {
            throw new common_1.NotFoundException(`Impossible to delete the Specialty with ID: ${id} because it was not found`);
        }
        await this.specialtyRepository.remove(specialty);
        return this.listSpecialties();
    }
    async updateSpecialty(id, name) {
        const specialty = await this.specialtyRepository.findOneOrFail(id);
        Object.assign(specialty, { name });
        return await this.specialtyRepository.save(specialty);
    }
};
SpecialtyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(specialty_repository_1.SpecialtyRepository)),
    __metadata("design:paramtypes", [specialty_repository_1.SpecialtyRepository])
], SpecialtyService);
exports.SpecialtyService = SpecialtyService;
//# sourceMappingURL=specialty.service.js.map