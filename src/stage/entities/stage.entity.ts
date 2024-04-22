import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Lid, (lid) => lid.stage_id)
  lid: Lid[];
}
