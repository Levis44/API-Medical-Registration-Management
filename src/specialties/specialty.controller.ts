import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateSpecialtyDto } from './dtos/create-specialty.dto';
import { UpdateSpecialtyDto } from './dtos/update-specialty.dto';

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

  @Delete('delete/:id')
  deleteSpecialtyById(@Param('id') id: string): Promise<Specialty[]> {
    return this.specialtyService.deleteSpecialtyById(id);
  }

  @Patch('update/:id')
  updateSpecialty(
    @Param('id') id: string,
    @Body() updateSpecialtyDto: UpdateSpecialtyDto,
  ): Promise<Specialty> {
    const { name } = updateSpecialtyDto;
    return this.specialtyService.updateSpecialty(id, name);
  }
}
