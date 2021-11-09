import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from './enum/userRole.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.USER })
  role: UserStatus;
}
