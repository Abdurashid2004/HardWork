import { IsNumber } from 'class-validator';
import { Role } from '../../role/entities/role.entity';
import { Stuff } from '../../stuff/entities/stuff.entity';

export class CreateStuffRoleDto {
  @IsNumber()
  stuff: Stuff;

  @IsNumber()
  role: Role;
}
