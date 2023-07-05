import prisma from "../../prisma/prisma";
import { IUser } from "../dto/IUser";

export class CreateUserUSeCase {
  async execute({nome, idade}: IUser){
    
    const newUser = await prisma.user.create({
      data: {
        nome: nome,
        idade: idade
      },
    });

    return newUser;
  }
}