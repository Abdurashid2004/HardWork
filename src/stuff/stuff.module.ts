import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { RoleModule } from '../role/role.module';
import { Role } from '../role/entities/role.entity';
import { StuffRole } from '../stuff_role/entities/stuff_role.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stuff, Role, StuffRole]),
    RoleModule,
    JwtModule.register({
      global: true,
      secret: 'MySecretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [StuffController],
  providers: [StuffService],
  exports: [StuffService],
})
export class StuffModule {}
