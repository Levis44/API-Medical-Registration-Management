import { IsNotEmpty } from 'class-validator';

export class UpdateSpecialtyDto {
  @IsNotEmpty()
  name: string;
}
