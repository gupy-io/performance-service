import { User } from './user.entity';

export interface UserRepository {
  save(user: User): Promise<User>;
  find(): Promise<User[]>;
  findOneById(id: number): Promise<User>;
  delete(id: number): Promise<void>;
}
