import { Module } from '@nestjs/common';
import { ReasonLidService } from './reason-lid.service';
import { ReasonLidController } from './reason-lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reason } from './entities/reason-lid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reason])],
  controllers: [ReasonLidController],
  providers: [ReasonLidService],
})
export class ReasonLidModule {}
