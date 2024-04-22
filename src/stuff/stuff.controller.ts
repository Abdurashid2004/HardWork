import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { LoginDto } from './dto/login.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Post()
  create(@Body() createStuffDto: CreateStuffDto) {
    return this.stuffService.create(createStuffDto);
  }

  @Get()
  findAll() {
    return this.stuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Post('signup')
  async signup(@Body() createStuffDto: CreateStuffDto) {
    this.stuffService.signUp(createStuffDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() loginDto: LoginDto) {
    return this.stuffService.login(loginDto);
  }

  @Post('add_role')
  async addRole(@Body() addRoleDto: AddRoleDto) {
    return this.stuffService.addRole(addRoleDto);
  }

  @Post('activate')
  async activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.stuffService.activateUser(activateUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuffDto: UpdateStuffDto) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffService.remove(+id);
  }
}
