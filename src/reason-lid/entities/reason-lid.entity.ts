import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class Reason {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reasonLid: string;

  @OneToMany(() => Lid, (lid) => lid.reason_id)
  lid: Lid[];
}
