import { IsNotEmpty } from 'class-validator';

export class CreateSpecialtyDto {
  @IsNotEmpty()
  name: string;
}
