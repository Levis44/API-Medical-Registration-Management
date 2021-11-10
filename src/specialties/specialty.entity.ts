import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Specialty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  name: string;
}
