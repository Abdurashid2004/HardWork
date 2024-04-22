import { IsNumber, IsString } from 'class-validator';

export class CreateLidStatusDto {
  @IsNumber()
  id: number;

  @IsString()
  status: string;
}
