import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';
import { GroupStuff } from './entities/group_stuff.entity';

@Injectable()
export class GroupStuffService {
  constructor(
    @InjectRepository(GroupStuff)
    private readonly groupStuffRepository: Repository<GroupStuff>,
  ) {}

  async create(createGroupStuffDto: CreateGroupStuffDto): Promise<GroupStuff> {
    const newGroupStuff = this.groupStuffRepository.create(createGroupStuffDto);
    return await this.groupStuffRepository.save(newGroupStuff);
  }

  async findAll(): Promise<GroupStuff[]> {
    return await this.groupStuffRepository.find();
  }

  async findOne(id: number): Promise<GroupStuff> {
    return await this.groupStuffRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateGroupStuffDto: UpdateGroupStuffDto,
  ): Promise<GroupStuff> {
    const groupStuffToUpdate = await this.groupStuffRepository.findOneBy({
      id,
    });
    if (!groupStuffToUpdate) {
      throw new Error(`GroupStuff with id ${id} not found`);
    }
    const updatedGroupStuff = Object.assign(
      groupStuffToUpdate,
      updateGroupStuffDto,
    );
    return await this.groupStuffRepository.save(updatedGroupStuff);
  }

  async remove(id: number): Promise<void> {
    const groupStuffToRemove = await this.groupStuffRepository.findOneBy({
      id,
    });
    if (!groupStuffToRemove) {
      throw new Error(`GroupStuff with id ${id} not found`);
    }
    await this.groupStuffRepository.delete(groupStuffToRemove);
  }
}
