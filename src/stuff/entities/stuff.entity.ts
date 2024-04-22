import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { StuffRole } from '../../stuff_role/entities/stuff_role.entity';
import { Role } from '../../role/entities/role.entity';
import { GroupStuff } from '../../group_stuff/entities/group_stuff.entity';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: false })
  is_active: boolean;

  @ManyToMany((type) => StuffRole, (stuffRole) => stuffRole.role)
  stuffRole: StuffRole[];

  @ManyToMany((type) => Role, (role) => role.stuff)
  role: Role[];

  @OneToMany((type) => GroupStuff, (groupStuff) => groupStuff.stuff_id)
  groupStuff: GroupStuff;
}
