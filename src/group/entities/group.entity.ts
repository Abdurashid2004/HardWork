import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Branch } from '../../brach/entities/brach.entity';
import { GroupStuff } from '../../group_stuff/entities/group_stuff.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  lesson_start_time: Date;

  @Column()
  lesson_continuous: string;

  @Column()
  lesson_week_day: string;

  @Column()
  group_stage_id: number;

  @Column()
  room_number: string;

  @Column()
  room_floor: number;

  @Column()
  branch_id: Branch;

  @Column()
  lessons_quant: number;

  @Column()
  is_active: boolean;

  @OneToMany((type) => GroupStuff, (groupStuff) => groupStuff.group_id)
  groupStuff: GroupStuff;
}
