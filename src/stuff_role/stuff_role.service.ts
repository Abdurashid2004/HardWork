import { Injectable } from '@nestjs/common';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';

@Injectable()
export class StuffRoleService {
  create(createStuffRoleDto: CreateStuffRoleDto) {
    return 'This action adds a new stuffRole';
  }

  findAll() {
    return `This action returns all stuffRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stuffRole`;
  }

  update(id: number, updateStuffRoleDto: UpdateStuffRoleDto) {
    return `This action updates a #${id} stuffRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} stuffRole`;
  }
}
