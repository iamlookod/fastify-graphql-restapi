import { graphQL } from "../../utils/axios";
import get from "lodash/get";

export interface IContext {
  data: IData;
}

export interface IData {
  operationName?: string | null;
  variables: object;
  query: string;
}

export const typeDefs = `
  type Post {
    id: ID
    title: String
    body: String
  }

  type Query {
    post(id: ID!): Post
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
    updatePost(id: ID!, input: UpdatePostInput!): Post
    deletePost(id: ID!): Boolean
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }
`;

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface CreatePostInput {
  title: string;
  body: string;
}

export interface UpdatePostInput {
  title: string;
  body: string;
}

export const serailizeBody = (values: IContext) => {
  const { query, variables } = values.data;

  return JSON.stringify({
    variables,
    query: `${query}`,
  });
};

export const resolvers = {
  Query: {
    async post(_: undefined, _args: object, context: IContext) {
      console.log(context);
      const data = serailizeBody(context);

      const { data: result } = await graphQL.post(`/api`, data);
      return get(result, "data.post");
    },
  },
  Mutation: {
    async createPost(_: undefined, _args: object, context: IContext) {
      console.log(context);
      const data = serailizeBody(context);

      const { data: result } = await graphQL.post(`/api`, data);
      return get(result, "data.createPost");
    },
    async updatePost(_: undefined, _args: object, context: IContext) {
      const data = serailizeBody(context);

      const { data: result } = await graphQL.post(`/api`, data);
      return get(result, "data.updatePost");
    },
    async deletePost(_: undefined, _args: object, context: IContext) {
      const data = serailizeBody(context);

      const { data: result } = await graphQL.post(`/api`, data);
      return get(result, "data.deletePost");
    },
  },
};
