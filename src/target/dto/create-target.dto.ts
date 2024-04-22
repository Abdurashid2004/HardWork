import { IsNumber, IsString } from 'class-validator';

export class CreateTargetDto {
  @IsString()
  name: string;
}
