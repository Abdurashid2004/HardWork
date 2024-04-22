import { PartialType } from '@nestjs/swagger';
import { CreateLidDto } from './create-lid.dto';

export class UpdateLidDto extends PartialType(CreateLidDto) {}
