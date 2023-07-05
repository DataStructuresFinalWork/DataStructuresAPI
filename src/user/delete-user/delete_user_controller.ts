import { Request, Response } from "express";
import { DeleteUserUseCase } from "./delete_user_use_case";
import { IUser } from "../dto/IUser";

export class DeleteUserController {
  async handle(req: Request, res: Response){
    const userId = req.params.id;
    

    const deleteUserUseCase = new DeleteUserUseCase();

    const user: IUser = {
      id: parseInt(userId),
      nome: "",
      idade: 0
    }

    const result = await deleteUserUseCase.execute(user);

    return res.status(204).json(result);
  }
}