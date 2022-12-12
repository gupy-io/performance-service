import { User } from './user';

export interface UsersRepository {
  save(user: User): Promise<User>;
  find(): Promise<User[]>;
  findOneById(id: number): Promise<User>;
  delete(id: number): Promise<void>;
}