import { IsDateString, IsNumber, IsString } from 'class-validator';
import { Target } from '../../target/entities/target.entity';
import { Reason } from '../../reason-lid/entities/reason-lid.entity';
import { Status } from '../../lid-status/entities/lid-status.entity';
import { Stage } from '../../stage/entities/stage.entity';

export class CreateLidDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  phone: string;

  @IsNumber()
  target_id: Target;

  @IsNumber()
  stage_id: Stage;

  // @IsDateString()
  test_date: Date;

  // @IsDateString()
  trial_lesson_date: Date;

  // @IsDateString()
  trial_lesson_time: Date;

  @IsNumber()
  trial_lesson_group_id: number;

  @IsNumber()
  status_id: Status;

  @IsNumber()
  reason_id: Reason;
}
