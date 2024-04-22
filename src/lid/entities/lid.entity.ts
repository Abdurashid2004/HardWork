import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Target } from '../../target/entities/target.entity';
import { Stage } from '../../stage/entities/stage.entity';
import { Status } from '../../lid-status/entities/lid-status.entity';
import { Reason } from '../../reason-lid/entities/reason-lid.entity';

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @ManyToOne((type) => Target, (target) => target.lid)
  target_id: Target;

  @ManyToOne((type) => Stage, (stage) => stage.lid)
  stage_id: Stage;

  @Column()
  test_date: Date;

  @Column()
  trial_lesson_date: Date;

  @Column()
  trial_lesson_time: Date;

  @Column()
  trial_lesson_group_id: number;

  @ManyToOne((type) => Status, (status) => status.lid)
  status_id: Status;
 
  @ManyToOne((type) => Reason, (reason) => reason.lid)
  reason_id: Reason;
}
