import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtyRepository } from './specialty.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialtyRepository])],
  controllers: [],
  providers: [],
})
export class SpecialtyModule {}
