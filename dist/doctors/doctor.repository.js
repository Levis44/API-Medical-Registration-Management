"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRepository = void 0;
const typeorm_1 = require("typeorm");
const doctor_entity_1 = require("./doctor.entity");
const specialty_entity_1 = require("../specialties/specialty.entity");
const common_1 = require("@nestjs/common");
let DoctorRepository = class DoctorRepository extends typeorm_1.Repository {
    async createDoctor(createDoctorDto, specialties) {
        const { name, crm, phoneNumber, cellphoneNumber, cep } = createDoctorDto;
        const doctorAlreadyExists = await this.findOne({ name });
        if (doctorAlreadyExists) {
            throw new common_1.ConflictException('Doctor already exists');
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
    async searchDoctor(search) {
        return this.createQueryBuilder('doctor')
            .andWhere(`LOWER(doctor.name) LIKE LOWER(:search) OR
       LOWER(doctor.cellphoneNumber) LIKE LOWER(:search) OR
       LOWER(doctor.phoneNumber) LIKE LOWER(:search)`, { search: `%${search}%` })
            .getMany();
    }
};
DoctorRepository = __decorate([
    (0, typeorm_1.EntityRepository)(doctor_entity_1.Doctor)
], DoctorRepository);
exports.DoctorRepository = DoctorRepository;
//# sourceMappingURL=doctor.repository.js.map