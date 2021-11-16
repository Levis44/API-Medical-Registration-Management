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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const create_doctor_dto_1 = require("./dtos/create-doctor.dto");
const doctor_service_1 = require("./doctor.service");
const typeorm_1 = require("typeorm");
const update_doctor_info_dto_1 = require("./dtos/update-doctor-info.dto");
const filter_doctors_dto_1 = require("./dtos/filter-doctors.dto");
let DoctorController = class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    createSpecialty(createDoctorDto, manager) {
        return this.doctorService.createDoctor(manager, createDoctorDto);
    }
    listDoctors() {
        return this.doctorService.listDoctors();
    }
    getTasks(filterDto) {
        const { search } = filterDto;
        return this.doctorService.searchDoctor(search);
    }
    updateInfo(id, updateInfoDto, manager) {
        return this.doctorService.updateInfo(id, updateInfoDto, manager);
    }
    async deleteDoctor(id) {
        await this.doctorService.deleteDoctor(id);
        return this.listDoctors();
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, typeorm_1.Transaction)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, typeorm_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doctor_dto_1.CreateDoctorDto,
        typeorm_1.EntityManager]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "createSpecialty", null);
__decorate([
    (0, common_1.Get)('listAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "listDoctors", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_doctors_dto_1.FilterDoctorsDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Patch)('updateInfo/:id'),
    (0, typeorm_1.Transaction)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, typeorm_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_doctor_info_dto_1.UpdateInfoDoctorDto,
        typeorm_1.EntityManager]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateInfo", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "deleteDoctor", null);
DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map