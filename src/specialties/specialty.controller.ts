import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateSpecialtyDto } from './dtos/create-specialty.dto';
import { Specialty } from './specialty.entity';
import { SpecialtyService } from './specialty.service';

@Controller('specialty')
export class SpecialtyController {
  constructor(private specialtyService: SpecialtyService) {}

  @Post('create')
  createSpecialty(
    @Body() createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<Specialty> {
    return this.specialtyService.createSpecialty(createSpecialtyDto);
  }

  @Get('listAll')
  listSpecialties(): Promise<Specialty[]> {
    return this.specialtyService.listSpecialties();
  }
}
