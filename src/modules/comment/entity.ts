import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { Post } from "../post/entity";
import { User } from "../user/entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "text",
  })
  content: string;

  @Column({ nullable: true })
  userId: string;
  @ManyToOne(() => User, (user: User) => user.comments, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;

  @Column({ nullable: true })
  postId: string;
  @ManyToOne(() => Post, (post: Post) => post.comments, { onDelete: "CASCADE" })
  @JoinColumn()
  post: Post;

  @CreateDateColumn({ type: "timestamp with time zone" })
  createdDate: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updatedDate: Date;
}
