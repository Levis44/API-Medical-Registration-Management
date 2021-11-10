import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
