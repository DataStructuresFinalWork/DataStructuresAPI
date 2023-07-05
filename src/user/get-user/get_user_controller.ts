import { Request, Response } from "express";
import { GetUserUseCase } from "./get_user_use_case";


export class GetUseController{
  async handle(req: Request, res: Response) {
    const getUsersUseCase = new GetUserUseCase();

    const result = await getUsersUseCase.execute();

    return res.status(200).json(result)
  }
}