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
exports.SpecialtyController = void 0;
const common_1 = require("@nestjs/common");
const create_specialty_dto_1 = require("./dtos/create-specialty.dto");
const specialty_service_1 = require("./specialty.service");
let SpecialtyController = class SpecialtyController {
    constructor(specialtyService) {
        this.specialtyService = specialtyService;
    }
    createSpecialty(createSpecialtyDto) {
        return this.specialtyService.createSpecialty(createSpecialtyDto);
    }
    listSpecialties() {
        return this.specialtyService.listSpecialties();
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialty_dto_1.CreateSpecialtyDto]),
    __metadata("design:returntype", Promise)
], SpecialtyController.prototype, "createSpecialty", null);
__decorate([
    (0, common_1.Get)('listAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialtyController.prototype, "listSpecialties", null);
SpecialtyController = __decorate([
    (0, common_1.Controller)('specialty'),
    __metadata("design:paramtypes", [specialty_service_1.SpecialtyService])
], SpecialtyController);
exports.SpecialtyController = SpecialtyController;
//# sourceMappingURL=specialty.controller.js.map