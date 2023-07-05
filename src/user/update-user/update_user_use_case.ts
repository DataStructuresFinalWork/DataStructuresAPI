import prisma from "../../prisma/prisma";
import { IUser } from "../dto/IUser";

export class UpdateUserUseCase {
  async execute({id, nome, idade}: IUser){
    
    try {
      const existingUser = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      
      const updateUser = await prisma.user.update({
        where: {
          id: existingUser?.id
        },
        data: {
          nome: nome || existingUser?.nome,
          idade: idade || existingUser?.idade
        },
      });
  
      return updateUser;
    } catch (error) {
      throw new Error(`Erro ao atualizar o usuário: ${error}`);
    }
  }
}