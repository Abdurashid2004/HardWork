import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.save(createRoleDto);
  }

  async findAll() {
    return this.roleRepo.find({ relations: ['stuff'] });
  }

  async findByValue(name: string) {
    return this.roleRepo.findOne({ where: { name } });
  }

  async findOne(id: number) {
    return this.roleRepo.findOne({ where: { id } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepo.update({ id }, updateRoleDto);
  }

  async remove(id: number) {
    return this.roleRepo.delete({ id });
  }
}
