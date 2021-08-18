import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { resolvers as postResolvers } from "./model/post";
import { typeDefs as postTypeDefs } from "./model/post";

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([postTypeDefs]),
  resolvers: mergeResolvers([postResolvers]),
});
