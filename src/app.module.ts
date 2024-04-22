import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatusModule } from './lid-status/lid-status.module';
import { ReasonLidModule } from './reason-lid/reason-lid.module';
import { LidModule } from './lid/lid.module';
import { StageModule } from './stage/stage.module';
import { TargetModule } from './target/target.module';
import { Lid } from './lid/entities/lid.entity';
import { Target } from './target/entities/target.entity';
import { Stage } from './stage/entities/stage.entity';
import { Reason } from './reason-lid/entities/reason-lid.entity';
import { Status } from './lid-status/entities/lid-status.entity';
import { StuffModule } from './stuff/stuff.module';
import { StuffRoleModule } from './stuff_role/stuff_role.module';
import { RoleModule } from './role/role.module';
import { Stuff } from './stuff/entities/stuff.entity';
import { Role } from './role/entities/role.entity';
import { StuffRole } from './stuff_role/entities/stuff_role.entity';
import { GroupStuffModule } from './group_stuff/group_stuff.module';
import { GroupModule } from './group/group.module';
import { BrachModule } from './brach/brach.module';
import { Branch } from './brach/entities/brach.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Lid, Target, Stage, Reason, Status, Stuff, Role, StuffRole, Branch],
      synchronize: true,
    }),
    LidStatusModule,
    ReasonLidModule,
    LidModule,
    StageModule,
    TargetModule,
    StuffModule,
    StuffRoleModule,
    RoleModule,
    GroupStuffModule,
    GroupModule,
    BrachModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
