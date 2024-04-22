// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationId, Repository } from 'typeorm';
import { Lid } from './entities/lid.entity';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';

@Injectable()
export class LidService {
  constructor(
    @InjectRepository(Lid)
    private readonly lidRepo: Repository<Lid>,
  ) {}
  
  async create(createlidDto: CreateLidDto) {
    return this.lidRepo.save(createlidDto);
  }

  findAll() {
    return this.lidRepo.find({
      relations: ['target', 'stage', 'status', 'reason'],
    });
  }

  async findOne(id: number) {
    const lid = await this.lidRepo.findOneBy({ id });
    if (!lid) {
      throw new NotFoundException(`Lid with ID ${id} not found`);
    }
    return lid;
  }

  async update(id: number, updateLidDto: UpdateLidDto) {
    const lid = await this.lidRepo.update({ id }, updateLidDto);
    if (!lid) {
      throw new NotFoundException(`Lid with ID ${id} not found`);
    }
  }

  remove(id: number) {
    return this.lidRepo.delete({ id });
  }
}
