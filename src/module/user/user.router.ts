import { Router } from "express";
import { userController } from "./user.controller";

const userRouter= Router()

userRouter.post('/create-user',userController.createUser)

userRouter.get('/',userController.getUser)

userRouter.get('/:userId',userController.getSingleUser)

userRouter.patch('/update/:userId', userController.updateUser)

userRouter.delete('/delete/:userId', userController.deleteUser)

export default userRouter