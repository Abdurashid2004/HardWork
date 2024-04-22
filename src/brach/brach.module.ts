import { Module } from '@nestjs/common';
import { BrachService } from './brach.service';
import { BrachController } from './brach.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './entities/brach.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Branch])],
  controllers: [BrachController],
  providers: [BrachService],
})
export class BrachModule {}
