import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], //import prisma module to use prisma service in your module
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
