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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const class_validator_1 = require("class-validator");
const specialty_entity_1 = require("../specialties/specialty.entity");
const typeorm_1 = require("typeorm");
let Doctor = class Doctor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Doctor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], Doctor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.MaxLength)(7),
    __metadata("design:type", Number)
], Doctor.prototype, "crm", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Doctor.prototype, "cellphoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Doctor.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Doctor.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => specialty_entity_1.Specialty),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Doctor.prototype, "medicalSpecialty", void 0);
Doctor = __decorate([
    (0, typeorm_1.Entity)()
], Doctor);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.entity.js.map