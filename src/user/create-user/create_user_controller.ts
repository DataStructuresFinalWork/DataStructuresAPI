import { Request, Response } from 'express';
import { CreateUserUSeCase } from './create_user_use_case';

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
   try{
    const {nome, idade} = req.body;

    const createUserUseCase = new CreateUserUSeCase();

    const result = await createUserUseCase.execute({nome, idade});

    return res.status(201).json(result);
   }catch(erro){
    return res.status(400).json(erro);
   }
  }
}