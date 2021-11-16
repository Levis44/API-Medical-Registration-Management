import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';
import { EntityManager, Transaction, TransactionManager } from 'typeorm';
import { UpdateInfoDoctorDto } from './dtos/update-doctor-info.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Post('create')
  @Transaction()
  createSpecialty(
    @Body() createDoctorDto: CreateDoctorDto,
    @TransactionManager() manager: EntityManager,
  ): Promise<Doctor> {
    return this.doctorService.createDoctor(manager, createDoctorDto);
  }

  @Get('listAll')
  listDoctors(): Promise<Doctor[]> {
    return this.doctorService.listDoctors();
  }

  @Patch('updateInfo/:id')
  @Transaction()
  updateInfo(
    @Param('id') id: string,
    @Body() updateInfoDto: UpdateInfoDoctorDto,
    @TransactionManager() manager: EntityManager,
  ): Promise<Doctor> {
    return this.doctorService.updateInfo(id, updateInfoDto, manager);
  }

  @Delete('delete/:id')
  async deleteDoctor(@Param('id') id: string) {
    await this.doctorService.deleteDoctor(id);
    return this.listDoctors();
  }
}
