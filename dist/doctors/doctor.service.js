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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctor_repository_1 = require("./doctor.repository");
const specialty_entity_1 = require("../specialties/specialty.entity");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const axios_1 = require("axios");
let DoctorService = class DoctorService extends query_typeorm_1.TypeOrmQueryService {
    constructor(doctorRepository) {
        super(doctorRepository, { useSoftDelete: true });
        this.doctorRepository = doctorRepository;
    }
    async createDoctor(manager, createDoctorDto) {
        const { medicalSpecialty } = createDoctorDto;
        const medicalSpecialties = await this.validateSpecialties(manager, medicalSpecialty);
        return this.doctorRepository.createDoctor(createDoctorDto, medicalSpecialties);
    }
    async listDoctors() {
        const doctors = await this.doctorRepository.find({
            relations: ['medicalSpecialty'],
        });
        const formattedDoctors = [];
        for (const _doctor of doctors) {
            const cepResponse = await (0, axios_1.default)({
                method: 'post',
                url: 'https://correios.contrateumdev.com.br/api/cep',
                data: { cep: _doctor.cep.toString() },
            });
            _doctor.cep = cepResponse.data;
            formattedDoctors.push(_doctor);
        }
        return formattedDoctors;
    }
    async updateInfo(id, updateInfoDto, manager) {
        const { medicalSpecialty } = updateInfoDto;
        const doctor = await this.doctorRepository.findOne({ id });
        if (!doctor) {
            throw new common_1.ConflictException('Doctor does not exists');
        }
        if (medicalSpecialty) {
            const medicalSpecialties = await this.validateSpecialties(manager, medicalSpecialty);
            return this.doctorRepository.save(Object.assign(doctor, Object.assign(Object.assign({}, updateInfoDto), { medicalSpecialty: medicalSpecialties })));
        }
        return this.doctorRepository.save(Object.assign(doctor, updateInfoDto));
    }
    async validateSpecialties(manager, medicalSpecialty) {
        const medicalSpecialties = await manager.findByIds(specialty_entity_1.Specialty, medicalSpecialty);
        if (medicalSpecialties.length < medicalSpecialty.length) {
            throw new common_1.ConflictException('Specialty does not exists');
        }
        return medicalSpecialties;
    }
    async deleteDoctor(id) {
        const doctor = await this.doctorRepository.findOne(id);
        if (!doctor) {
            throw new common_1.NotFoundException(`Impossible to delete the Doctor with ID: ${id} because it was not found`);
        }
        await this.doctorRepository.softRemove(doctor);
    }
    searchDoctor(search) {
        return this.doctorRepository.searchDoctor(search);
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_repository_1.DoctorRepository)),
    __metadata("design:paramtypes", [doctor_repository_1.DoctorRepository])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map