import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Stuff } from '../../stuff/entities/stuff.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class StuffRole {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Stuff, (stuff) => stuff.stuffRole)
  stuff: Stuff;

  @ManyToOne((type) => Role, (role) => role.stuffRole)
  role: Role;
}
