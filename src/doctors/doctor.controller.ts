import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

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
  @Transaction()
  listDoctors(): Promise<Doctor[]> {
    return this.doctorService.listDoctors();
  }

  @Patch('updateInfo/:id')
  updateInfo(@Param('id') id: string, @Body() updateInfo: UpdateInfoDoctorDto) {
    return this.doctorService.updateInfo(id, updateInfo);
  }
}
