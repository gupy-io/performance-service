import { User } from './user';

export abstract class UsersRepository {
  abstract save(user: User): Promise<User>;
  abstract find(): Promise<User[]>;
  abstract findOneById(id: number): Promise<User>;
  abstract delete(id: number): Promise<void>;
}
