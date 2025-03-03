import { Request, Response } from "express";
import { userServices } from "./user.services";


const createUser=async (req:Request,res:Response)=>{
   try {
    const payload=req.body;
   const result =await userServices.createUser(payload)
   res.json({
    status:200,
    message:"user create successfully",
    data:result
   }) 
   } catch (error) {
    res.json({
        status:false,
        message:"something went wrong",
        error
    })
   }
}

export const userController={
    createUser
}