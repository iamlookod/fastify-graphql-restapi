import { FastifyPluginAsync } from "fastify";
import commentService, { ICommentPayload } from "./services";

const comment: FastifyPluginAsync = async (app): Promise<void> => {
  app.get("/", async function () {
    const result = commentService.getAll();
    return result;
  });

  app.get<{
    Params: { id: string };
  }>("/:id", async function (request) {
    const result = commentService.getOne(request.params.id);
    return result;
  });

  app.post<{
    Body: ICommentPayload;
  }>("/", async function (request) {
    const result = commentService.create(request.body);

    return result;
  });

  app.put<{
    Params: { id: string };
    Body: ICommentPayload;
  }>("/:id", async function (request) {
    const result = commentService.update(request.params.id, request.body);
    return result;
  });

  app.delete<{
    Params: { id: string };
    Body: ICommentPayload;
  }>("/:id", async function (request) {
    const result = commentService.delete(request.params.id);
    return result;
  });
};

export default comment;
