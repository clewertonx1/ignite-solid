import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers.user_id as string;
    console.log(user_id);
    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.json(allUsers);
    } catch (error) {
      response.status(400).json({ error: "user is not adm" });
    }
  }
}

export { ListAllUsersController };
