import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSpecialtyDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
