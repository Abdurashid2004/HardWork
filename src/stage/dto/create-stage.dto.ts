import { IsNumber, IsString } from 'class-validator';

export class CreateStageDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
