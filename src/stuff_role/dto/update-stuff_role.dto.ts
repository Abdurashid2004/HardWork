import { PartialType } from '@nestjs/swagger';
import { CreateStuffRoleDto } from './create-stuff_role.dto';

export class UpdateStuffRoleDto extends PartialType(CreateStuffRoleDto) {}
