import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private readonly stageRepo: Repository<Stage>,
  ) {}

  async create(createStageDto: CreateStageDto) {
    return this.stageRepo.save(createStageDto);
  }

  async findAll() {
    return this.stageRepo.find();
  }

  async findOne(id: number) {
    return this.stageRepo.findOneBy({ id });
  }

  async update(id: number, updateStageDto: UpdateStageDto) {
    const stage = await this.stageRepo.update({ id }, updateStageDto);
    if (!stage) {
      throw new NotFoundException(`Lid with ID ${id} not found`);
    }
    return stage;
  }

  remove(id: number) {
    return this.stageRepo.delete({ id });
  }
}
