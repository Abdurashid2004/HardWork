import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    const newGroup = this.groupRepository.create(createGroupDto);
    return await this.groupRepository.save(newGroup);
  }

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  async findOne(id: number): Promise<Group> {
    return await this.groupRepository.findOneBy({ id });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto): Promise<Group> {
    const groupToUpdate = await this.groupRepository.findOneBy({ id });
    if (!groupToUpdate) {
      throw new Error(`Group with id ${id} not found`);
    }
    const updatedGroup = Object.assign(groupToUpdate, updateGroupDto);
    return await this.groupRepository.save(updatedGroup);
  }

  async remove(id: number): Promise<void> {
    const groupToRemove = await this.groupRepository.findOneBy({ id });
    if (!groupToRemove) {
      throw new Error(`Group with id ${id} not found`);
    }
    await this.groupRepository.delete(groupToRemove);
  }
}
