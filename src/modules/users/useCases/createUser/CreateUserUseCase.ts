import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExist = this.usersRepository.findByEmail(email);
    if (userAlreadyExist) {
      console.log("error");
      throw new Error("Email already used");
    }
    console.log("continou");
    const user = this.usersRepository.create({ email, name });
    return user;
  }
}

export { CreateUserUseCase };
