import { Module } from '@nestjs/common';
import { GroupStuffService } from './group_stuff.service';
import { GroupStuffController } from './group_stuff.controller';

@Module({
  controllers: [GroupStuffController],
  providers: [GroupStuffService],
})
export class GroupStuffModule {}
