import { PartialType } from '@nestjs/swagger';
import { CreateBrachDto } from './create-brach.dto';

export class UpdateBrachDto extends PartialType(CreateBrachDto) {}
