import { getRepository, Repository } from "typeorm";
import { Comment } from "./entity";

export interface ICommentPayload {
  title: string;
  content: string;
  userId: string;
  postId: string;
}

class CommentService {
  commentRepository: Repository<Comment>;
  constructor() {
    this.commentRepository = getRepository(Comment);
  }

  create = async (payload: ICommentPayload) => {
    const result = await this.commentRepository.save(payload);
    return result;
  };

  update = async (id: string, payload: ICommentPayload) => {
    const comment = await this.commentRepository.findOne(id);
    const result = await this.commentRepository.save({
      ...comment,
      ...payload,
    });
    return result;
  };

  delete = async (id: string) => {
    const result = await this.commentRepository.delete(id);
    return result;
  };

  getOne = async (id: string) => {
    const result = await this.commentRepository.findOne(id);
    return result;
  };

  getAll = async () => {
    const result = this.commentRepository.find();
    return result;
  };
}

export default new CommentService();
