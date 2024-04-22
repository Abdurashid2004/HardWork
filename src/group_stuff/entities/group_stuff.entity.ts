import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../../group/entities/group.entity';
import { Stuff } from '../../stuff/entities/stuff.entity';

@Entity()
export class GroupStuff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Group, (group) => group.groupStuff)
  group_id: Group;

  @ManyToOne((type) => Stuff, (stuff) => stuff.groupStuff)
  stuff_id: Stuff;
}
