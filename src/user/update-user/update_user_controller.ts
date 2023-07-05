import { Request, Response } from "express";
import { IUser } from "../dto/IUser";
import { UpdateUserUseCase } from "./update_user_use_case";



export class UpdateUserController {
  async handle(req: Request, res: Response){

    const userId = req.params.id;
    const idNumber = parseInt(userId); 

    const {nome, idade}: IUser = req.body;

    const updateUserUseCase = new UpdateUserUseCase();

    const result = await updateUserUseCase.execute({id: idNumber, nome, idade});

    return res.status(200).json(result);

  }
}