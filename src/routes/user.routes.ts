import { Router } from "express";
import { CreateUserController } from "../user/create-user/create_user_controller";
import { GetUseController } from "../user/get-user/get_user_controller";
import { UpdateUserController } from "../user/update-user/update_user_controller";
import { DeleteUserController } from "../user/delete-user/delete_user_controller";

const createUserController = new CreateUserController();
const getUserController = new GetUseController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', getUserController.handle);
userRoutes.put('/:id', updateUserController.handle);
userRoutes.delete('/:id', deleteUserController.handle);



export default userRoutes;