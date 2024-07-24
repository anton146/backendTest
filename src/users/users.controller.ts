import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUser: Prisma.UserCreateInput) {
    return this.usersService.create(createUser);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:name/:password')
  findOne(@Param('name') name: string, @Param('password') password: string) {
    console.log("findOne")
    return this.usersService.findOne(name, password);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserCreateInput) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
