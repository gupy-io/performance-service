import { UsersRepository } from '../domain/users.repository';
import { Injectable } from '@nestjs/common';
import { User } from '../domain/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseUsersRepository extends UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly orm: Repository<User>,
  ) {
    super();
  }
  save(user: User): Promise<User> {
    return this.orm.save(user);
  }

  find(): Promise<User[]> {
    return this.orm.find();
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.orm.findOneBy({ id: id });
    if (user == null) throw Error();
    return user;
  }

  async delete(id: number): Promise<void> {
    await this.orm.delete(id);
  }
}
