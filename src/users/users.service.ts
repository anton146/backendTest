import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger('User service');

  async create(data: Prisma.UserCreateInput): Promise<User> {
    this.logger.log('createUser');
    const createUser = await this.prisma.user.create({
      data,
    });
    return createUser;
  }

  async findAll() {
    this.logger.log('getAllUsers->>');
    const users = await this.prisma.user.findMany();
    return  users;
  }

  async findOne(name: string, password: string) {
    this.logger.log('findOne->>');
    const users = await this.prisma.user.findFirst({
      where: { name: name, password: password }
    });
    return  users;
  }

  async update(id: number, updateUserDto: Prisma.UserCreateInput) {
    this.logger.log('updateUser');
    const updateUser = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {...updateUserDto},
    });
    return updateUser;
  }

  async delete(id: number) {
    this.logger.log('deleteUser');
    const deleteUser = await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return deleteUser;
  }
}
