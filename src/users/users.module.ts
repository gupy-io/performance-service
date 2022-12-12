import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './interface/users.controller';
import { UsersService } from './application/users.service';
import { UserSchema } from './infrastructure/user.schema';
import { DatabaseUsersRepository } from './infrastructure/database.users.repository';
import { UsersRepository } from './application/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [
    UsersService,
    { provide: UsersRepository, useClass: DatabaseUsersRepository },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
