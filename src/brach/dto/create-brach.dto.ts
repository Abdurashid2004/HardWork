import { IsString } from 'class-validator';

export class CreateBrachDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  call_number: string;
}
