import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { Repository } from 'typeorm';
import { RoleService } from '../role/role.service';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class StuffService {
  constructor(
    @InjectRepository(Stuff) private readonly stuffRepo: Repository<Stuff>,
    private readonly rolesService: RoleService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createStuffDto: CreateStuffDto) {
    const newUser = await this.stuffRepo.save(createStuffDto);
    const { role: id, ...others } = createStuffDto;

    const role = await this.rolesService.findOne(id);
    console.log(role);

    if (!role) {
      throw new BadRequestException('role not found');
    }

    newUser.role = role;
    await this.stuffRepo.save(newUser);

    return newUser;
  }

  async findAll() {
    return this.stuffRepo.find();
  }

  findOne(id: number) {
    return this.stuffRepo.findOneBy({ id });
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
    return this.stuffRepo.update({ id }, updateStuffDto);
  }

  remove(id: number) {
    return this.stuffRepo.delete({ id });
  }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.stuffRepo.findOne({
      where: { id: addRoleDto.userId },
    });
    const role = await this.rolesService.findByValue(addRoleDto.value);

    if (role && user) {
      user.role = [role];
      const updatedUser = await this.stuffRepo.save(user);
      return updatedUser;
    }

    throw new NotFoundException('foydalanuvchi yoki role topilmadi');
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.stuffRepo.findOne({
      where: { id: activateUserDto.userId },
    });

    if (user) {
      user.is_active = true;
      await this.stuffRepo.save(user);
      return user;
    }

    console.log('user not found');
  }

  async signUp(createStuffDto: CreateStuffDto) {
    const candidate = await this.stuffRepo.findOne({
      where: { email: createStuffDto.email },
    });

    if (candidate) {
      throw new HttpException(
        `this user already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await bcrypt.hash(createStuffDto.password, 7);
    createStuffDto.password = hashedPassword;

    const newUser = await this.stuffRepo.create(createStuffDto);

    return this.generateToken(newUser);
  }
  private async generateToken(user: Stuff) {
    const payload = { sub: user.id, email: user.email, roles: user.role };
    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    const user = await this.stuffRepo.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Email yoki parol xato');
    }

    const validPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!validPassword) {
      throw new UnauthorizedException('Email yoki parol xato');
    }

    return this.generateToken(user);
  }
}
