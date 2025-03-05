import { IUser } from "./user.interface"
import User from "./user.module"

const createUser=async(payload:IUser):Promise<IUser>=>{
  const result=await User.create(payload)
  return result
}

const getUser=async()=>{
  const result=await User.find()
  return result
}

const getSingleUser=async(id:string)=>{
  const result=await User.findById(id)
  return result
}

const updateUser=async(id:string,data:IUser)=>{
  const result=await User.findByIdAndUpdate(id,data,{new:true})
  return result
}

const deleteUser=async(id:string)=>{
  const result= await User.findByIdAndDelete(id,{new:true})
  
  return result
}

export const userServices={
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}