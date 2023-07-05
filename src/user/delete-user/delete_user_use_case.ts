import prisma from "../../prisma/prisma";
import { IUser } from "../dto/IUser";

export class DeleteUserUseCase {
  async execute({id}: IUser) {
    const userAlreadyExits = await prisma.user.findMany({
      where: {
        id: id,
      },
    });

    if(!userAlreadyExits) throw new Error('User não existe');

    const deleteUser = await prisma.user.deleteMany({
      where: {
        id: id
      },
    });

    return deleteUser;
  }
}