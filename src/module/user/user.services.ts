import { IUser } from "./user.interface"
import User from "./user.module"

const createUser=async(payload:IUser):Promise<IUser>=>{
  const result=await User.create(payload)
  return result
}
export const userServices={
    createUser
}