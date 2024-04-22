import { IsEmail, IsString } from 'class-validator';
import { Role } from '../../role/entities/role.entity';

export class CreateStuffDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  phone: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  is_active: boolean;

  role: any;
}
