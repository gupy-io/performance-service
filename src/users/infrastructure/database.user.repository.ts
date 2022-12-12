import { UsersRepository } from '../application/users.repository';
import { Injectable } from '@nestjs/common';
import { User } from '../application/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseUserRepository implements UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly orm: Repository<User>,
  ) {}
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
