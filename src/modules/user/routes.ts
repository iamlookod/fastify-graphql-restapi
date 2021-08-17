import { FastifyPluginAsync } from "fastify";
import userService, { IUserPayload } from "./services";

const user: FastifyPluginAsync = async (app): Promise<void> => {
  app.get("/", async function () {
    const result = userService.getAll();
    return result;
  });

  app.get<{
    Params: { id: string };
  }>("/:id", async function (request) {
    const result = userService.getOne(request.params.id);
    return result;
  });

  app.post<{
    Body: IUserPayload;
  }>("/", async function (request) {
    const result = userService.create(request.body);

    return result;
  });

  app.put<{
    Params: { id: string };
    Body: IUserPayload;
  }>("/:id", async function (request) {
    const result = userService.update(request.params.id, request.body);
    return result;
  });

  app.delete<{
    Params: { id: string };
    Body: IUserPayload;
  }>("/:id", async function (request) {
    const result = userService.delete(request.params.id);
    return result;
  });
};

export default user;
