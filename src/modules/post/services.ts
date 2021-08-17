import { getRepository, Repository } from "typeorm";
import { Post } from "./entity";

export interface IPostPayload {
  title: string;
  content: string;
  userId: string;
}

class PostService {
  postRepository: Repository<Post>;
  constructor() {
    this.postRepository = getRepository(Post);
  }

  create = async (payload: IPostPayload) => {
    const result = await this.postRepository.save(payload);
    return result;
  };

  update = async (id: string, payload: IPostPayload) => {
    const post = await this.postRepository.findOne(id);
    const result = await this.postRepository.save({ ...post, ...payload });
    return result;
  };

  delete = async (id: string) => {
    const result = await this.postRepository.delete(id);
    return result;
  };

  getOne = async (id: string) => {
    const result = await this.postRepository.findOne(id);
    return result;
  };

  getAll = async () => {
    const result = this.postRepository.find();
    return result;
  };
}

export default new PostService();
