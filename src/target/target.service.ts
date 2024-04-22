import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Target } from './entities/target.entity';

@Injectable()
export class TargetService {
  constructor(
    @InjectRepository(Target)
    private readonly targetRepository: Repository<Target>,
  ) {}

  async create(createTargetDto: CreateTargetDto): Promise<Target> {
    return this.targetRepository.save(createTargetDto);
  }

  async findAll(): Promise<Target[]> {
    return this.targetRepository.find();
  }

  async findOne(id: number): Promise<Target> {
    const target = await this.targetRepository.findOneBy({ id });
    if (!target) {
      throw new NotFoundException(`Target with id ${id} not found`);
    }
    return target;
  }

  async update(id: number, updateTargetDto: UpdateTargetDto) {
    const target = await this.targetRepository.update({ id }, updateTargetDto);
    if (!target) {
      throw new NotFoundException(`Lid with ID ${id} not found`);
    }
    return target;
  }

  async remove(id: number): Promise<void> {
    await this.targetRepository.delete({ id });
  }
}
