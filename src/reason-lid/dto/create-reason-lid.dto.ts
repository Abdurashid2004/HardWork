import { IsNumber, IsString } from 'class-validator';

export class CreateReasonLidDto {
  @IsNumber()
  id: number;

  @IsString()
  reasonLid: string;
}
