import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrachService } from './brach.service';
import { CreateBrachDto } from './dto/create-brach.dto';
import { UpdateBrachDto } from './dto/update-brach.dto';

@Controller('brach')
export class BrachController {
  constructor(private readonly brachService: BrachService) {}

  @Post()
  create(@Body() createBrachDto: CreateBrachDto) {
    return this.brachService.create(createBrachDto);
  }

  @Get()
  findAll() {
    return this.brachService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brachService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrachDto: UpdateBrachDto) {
    return this.brachService.update(+id, updateBrachDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brachService.remove(+id);
  }
}
