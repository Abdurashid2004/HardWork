import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StuffRole } from '../../stuff_role/entities/stuff_role.entity';
import { Stuff } from '../../stuff/entities/stuff.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => StuffRole, (stuffRole) => stuffRole.role)
  stuffRole: StuffRole[];

  @OneToMany((type) => Stuff, (stuff) => stuff.role)
  stuff: Stuff[];
}
