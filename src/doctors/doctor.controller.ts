import { Body, Controller, Post } from '@nestjs/common';

import { CreateDoctorDto } from './dtos/create-doctor.dto';

import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Post('create')
  createSpecialty(@Body() createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    return this.doctorService.createDoctor(createDoctorDto);
  }
}
