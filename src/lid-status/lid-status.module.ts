import { Module } from '@nestjs/common';
import { LidStatusService } from './lid-status.service';
import { LidStatusController } from './lid-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from './entities/lid-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Status])],
  controllers: [LidStatusController],
  providers: [LidStatusService],
})
export class LidStatusModule {}
