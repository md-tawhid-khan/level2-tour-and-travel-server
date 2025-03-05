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

const getUser=async(req:Request,res:Response)=>{
    try {
        const result=await userServices.getUser()
        res.json({
            status:true,
            message:"get users information successfully",
            data:result
        })
    } catch (error) {
        res.json({
            status:false,
            message:'do not get users information',
            error
        })
    }
}

const getSingleUser=async(req:Request,res:Response)=>{
    try {
         const id=req.params.userId;
         const result = await userServices.getSingleUser(id)
         res.json({
            status:true,
            message:"successfully get single data",
            data:result

         })
    } catch (error) {
        res.json({
            status:false,
            message:'do not find single data ',
            error
        })
    }
}

const updateUser=async(req:Request,res:Response)=>{
 try {
    const id=req.params.userId;
    const data= req.body;
   
        const result=await  userServices.updateUser(id,data)
        res.json({
            status:true,
            message:"successfully update user information",
            data:result,
 })

   
 } catch (error) {
    res.json({
        status:false,
        message:"do not update user information",
        error
    })
 }
}

const deleteUser=async(req:Request,res:Response)=>{
    try {
        const id = req.params.userId;
    const result =await userServices.deleteUser(id)
    res.json({
        status:true,
        message:'delete user information successfully',
        data:result
    })
    } catch (error) {
        res.json({
            status:false,
            message:'do not delete data ',
            error
        })
    }
}

export const userController={
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}