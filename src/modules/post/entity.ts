import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { Comment } from "../comment/entity";
import { User } from "../user/entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({
    type: "text",
  })
  content: string;

  @Column({ nullable: true })
  userId: string;
  @ManyToOne(() => User, (user: User) => user.posts, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => Comment, (comment: Comment) => comment.post)
  comments: Comment[];

  @CreateDateColumn({ type: "timestamp with time zone" })
  createdDate: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updatedDate: Date;
}
