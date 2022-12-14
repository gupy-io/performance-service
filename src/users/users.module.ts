import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { DatabaseUsersRepository } from './repository/database.users.repository';
import { UsersRepository } from './service/users.repository';
import { User } from './entity/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    { provide: UsersRepository, useClass: DatabaseUsersRepository },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
