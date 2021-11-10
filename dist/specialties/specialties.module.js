"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtiesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const specialty_controller_1 = require("./specialty.controller");
const specialty_repository_1 = require("./specialty.repository");
const specialty_service_1 = require("./specialty.service");
let SpecialtiesModule = class SpecialtiesModule {
};
SpecialtiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([specialty_repository_1.SpecialtyRepository])],
        controllers: [specialty_controller_1.SpecialtyController],
        providers: [specialty_service_1.SpecialtyService],
    })
], SpecialtiesModule);
exports.SpecialtiesModule = SpecialtiesModule;
//# sourceMappingURL=specialties.module.js.map