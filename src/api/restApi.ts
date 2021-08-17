import { FastifyPluginAsync } from "fastify";
import { api } from "../utils/axios";

export interface PostPayload {
  title: string;
  body: string;
  userId: number;
}

const restApi: FastifyPluginAsync = async (app): Promise<void> => {
  app.get("/api/stat", (_request, reply) => {
    reply.status(200).send({ status: "ok", code: 200 });
  });

  app.get<{
    Params: { id: number };
  }>("/api/posts/:id", async function (request, reply) {
    const { id } = request.params;
    const { data } = await api.get(`/posts/${id}`);
    reply.send(data);
  });

  app.get("/api/posts", async (_request, reply) => {
    const { data } = await api.get("/posts");
    reply.send(data);
  });

  app.post<{
    Body: PostPayload;
  }>("/api/posts", async (request, reply) => {
    const { data } = await api.post("/posts", request.body);
    reply.send(data);
  });

  app.put<{
    Params: { id: number };
    Body: PostPayload & { id: number };
  }>("/api/posts/:id", async (request, reply) => {
    const { id } = request.params;
    const { data } = await api.put(`/posts/${id}`, request.body);
    reply.send(data);
  });

  app.delete<{
    Params: { id: number };
  }>("/api/posts/:id", async function (request, reply) {
    const { id } = request.params;
    const { data } = await api.delete(`/posts/${id}`);
    reply.send(data);
  });
};

export default restApi;
