import { Request, Response } from "express";
import { AuthenticatedUserService } from "../services/AuthenticatedUserService";

class AuthenticatedUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthenticatedUserService();

    const result = await service.execute(code);

    return response.json(result);
  }
}

export { AuthenticatedUserController };
