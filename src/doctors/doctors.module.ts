import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorRepository } from './doctor.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorRepository])],
  controllers: [],
  providers: [],
})
export class DoctorsModule {}
