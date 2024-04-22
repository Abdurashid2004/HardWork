import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrachDto } from './dto/create-brach.dto';
import { UpdateBrachDto } from './dto/update-brach.dto';
import { Branch } from './entities/brach.entity';

@Injectable()
export class BrachService {
  constructor(
    @InjectRepository(Branch)
    private readonly brachRepository: Repository<Branch>,
  ) {}

  async create(createBrachDto: CreateBrachDto): Promise<Branch> {
    const newBrach = this.brachRepository.create(createBrachDto);
    return await this.brachRepository.save(newBrach);
  }

  async findAll(): Promise<Branch[]> {
    return await this.brachRepository.find();
  }

  async findOne(id: number): Promise<Branch> {
    return await this.brachRepository.findOneBy({ id });
  }

  async update(id: number, updateBrachDto: UpdateBrachDto): Promise<Branch> {
    const brachToUpdate = await this.brachRepository.findOneBy({ id });
    if (!brachToUpdate) {
      throw new Error(`Brach with id ${id} not found`);
    }
    const updatedBrach = Object.assign(brachToUpdate, updateBrachDto);
    return await this.brachRepository.save(updatedBrach);
  }

  async remove(id: number): Promise<void> {
    const brachToRemove = await this.brachRepository.findOneBy({ id });
    if (!brachToRemove) {
      throw new Error(`Brach with id ${id} not found`);
    }
    await this.brachRepository.delete(brachToRemove);
  }
}
