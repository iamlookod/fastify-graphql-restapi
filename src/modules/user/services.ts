import { getRepository, Repository } from "typeorm";
import { User } from "./entity";

export interface IUserPayload {
  firstName: string;
  lastName: string;
  isActive: boolean;
}

class UserService {
  userRepository: Repository<User>;
  constructor() {
    this.userRepository = getRepository(User);
  }

  create = async (payload: IUserPayload) => {
    const result = await this.userRepository.save(payload);
    return result;
  };

  update = async (id: string, payload: IUserPayload) => {
    const user = await this.userRepository.findOne(id);
    const result = await this.userRepository.save({ ...user, ...payload });
    return result;
  };

  delete = async (id: string) => {
    const result = await this.userRepository.delete(id);
    return result;
  };

  getOne = async (id: string) => {
    const result = await this.userRepository.findOne(id, {
      relations: ["posts", "comments"],
    });
    return result;
  };

  getAll = async (): Promise<User[]> => {
    const result = this.userRepository.find({
      relations: ["posts", "comments"],
    });
    return result;
  };
}

export default new UserService();
