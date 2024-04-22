import { Module } from '@nestjs/common';
import { LidService } from './lid.service';
import { LidController } from './lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lid])],
  controllers: [LidController],
  providers: [LidService],
})
export class LidModule {}
