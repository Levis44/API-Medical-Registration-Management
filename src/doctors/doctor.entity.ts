import { IsInt, IsString, MaxLength } from 'class-validator';
import { Specialty } from 'src/specialties/specialty.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @MaxLength(120)
  name: string;

  @Column()
  @IsInt()
  @MaxLength(7)
  crm: number;

  //cep: number;

  @ManyToMany(() => Specialty)
  @JoinTable()
  medicalSpecialty: Specialty[];
}
