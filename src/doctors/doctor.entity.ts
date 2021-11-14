import { IsInt, IsNumber, IsString, MaxLength } from 'class-validator';
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
  @IsNumber()
  @MaxLength(7)
  crm: number;

  @Column({ length: 30 })
  cellphoneNumber: string;

  @Column({ length: 30 })
  phoneNumber: string;

  //cep: number;

  @ManyToMany(() => Specialty)
  @JoinTable()
  medicalSpecialty: Specialty[];
}
