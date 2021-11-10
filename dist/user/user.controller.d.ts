import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
