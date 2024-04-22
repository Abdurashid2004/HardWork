import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReasonLidDto } from './dto/create-reason-lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reason } from './entities/reason-lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReasonLidService {
  constructor(
    @InjectRepository(Reason)
    private readonly rasonRepo: Repository<Reason>,
  ) {}

  async create(createReasonLidDto: CreateReasonLidDto) {
    return this.rasonRepo.save(createReasonLidDto);
  }

  async findAll() {
    return this.rasonRepo.find();
  }

  async findOne(id: number) {
    return this.rasonRepo.findOneBy({ id });
  }

  async update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    const status = await this.rasonRepo.update({ id }, updateReasonLidDto);
    if (!status) {
      throw new NotFoundException(`Lid with ID ${id} not found`);
    }
    return status;
  }

  async remove(id: number) {
    return this.rasonRepo.delete({ id });
  }
}
