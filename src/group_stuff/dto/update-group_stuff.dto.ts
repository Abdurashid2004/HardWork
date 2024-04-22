import { PartialType } from '@nestjs/swagger';
import { CreateGroupStuffDto } from './create-group_stuff.dto';

export class UpdateGroupStuffDto extends PartialType(CreateGroupStuffDto) {}
