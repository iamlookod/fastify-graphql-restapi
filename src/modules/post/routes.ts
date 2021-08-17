import { FastifyPluginAsync } from "fastify";
import postServices, { IPostPayload } from "./services";

const post: FastifyPluginAsync = async (app): Promise<void> => {
  app.get("/", async function () {
    const result = postServices.getAll();
    return result;
  });

  app.get<{
    Params: { id: string };
  }>("/:id", async function (request) {
    const result = postServices.getOne(request.params.id);
    return result;
  });

  app.post<{
    Body: IPostPayload;
  }>("/", async function (request) {
    console.log(request.body);
    const result = postServices.create(request.body);

    return result;
  });

  app.put<{
    Params: { id: string };
    Body: IPostPayload;
  }>("/:id", async function (request) {
    const result = postServices.update(request.params.id, request.body);
    return result;
  });

  app.delete<{
    Params: { id: string };
    Body: IPostPayload;
  }>("/:id", async function (request) {
    const result = postServices.delete(request.params.id);
    return result;
  });
};

export default post;
