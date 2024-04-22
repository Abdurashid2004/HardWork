import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLidStatusDto } from './dto/create-lid-status.dto';
import { UpdateLidStatusDto } from './dto/update-lid-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/lid-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStatusService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepo: Repository<Status>,
  ) {}

  async create(createLidStatusDto: CreateLidStatusDto) {
    return this.statusRepo.save(createLidStatusDto);
  }

  async findAll() {
    return this.statusRepo.find();
  }

  async findOne(id: number) {
    const status = await this.statusRepo.findOneBy({ id });
    if (!status) {
      throw new NotFoundException(`Lid with ID ${id} not found`);
    }
    return status;
  }

  async update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    const status = await this.statusRepo.update({ id }, updateLidStatusDto);
    if (!status) {
      throw new NotFoundException(`Lid with ID ${id} not found`);
    }
    return status;
  }

  async remove(id: number) {
    return this.statusRepo.delete({ id });
  }
}
