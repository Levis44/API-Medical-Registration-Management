import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name } = createUserDto;

    return await this.save({
      name,
    });
  }
}
