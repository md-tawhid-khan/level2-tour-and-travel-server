import { Request, Response } from "express";
import { tourServices } from "./tour.service" 

const createTour=async(req:Request ,res:Response)=>{
    try {
        const tourData=req.body;       
        const result =  await tourServices.createTour(tourData)
        res.json({
            status:true,
            message:'successfully create tours data',
            data:result
        })
    } 
    catch (error) {
      res.json({
        status:false,
        message:'do not create tours data',
        error
      })   
    }
}

const getTour = async(req:Request, res:Response)=>{
    try {
        const result = await tourServices.getTour()
        res.json({
            status:true,
            message:"successfully get all tour data",
            data:result
        })
    } catch (error) {
        res.json({
            status:false,
            message:'successfully get all tour data',
            error
        })
    }
}

const getSingleTour=async(req:Request,res:Response)=>{
    try {
       const id = req.params.tourId;
       const result=await tourServices.getSingleTour(id) 
       res.json({
        status:true,
        message:"successfully get single tour data",
        data:result
       })
    } catch (error) {
       res.json({
        status:false,
        message:'do not get single tour data',
        error
       }) 
    }
}

const updateTour=async(req:Request,res:Response)=>{
    try {
     const id=req.params.tourId;
     const data=req.body;
     const result=await tourServices.updateTour(id,data)
     res.json({
        status:true,
        message:"successfully updated tour data",
        data:result
     })   
    } catch (error) {
        res.json({
            status:false,
            message:'sorry, do not update tour data',
            error
        })
    }
}

const deleteTour=async(req:Request,res:Response)=>{
try {
    const id=req.params.tourId;
    const result = await tourServices.deleteTour(id)  
    res.json({
        status:true,
        message:"deleted successfully",
        data:result
    })
} catch (error) {
    res.json({
        status:false,
        message:'do not delete tour data ',
        error
    })
}
}


const getNextSchedule= async(req:Request,res:Response)=>{
   try {
    const id=req.params.id;
   const result=await tourServices.getNextSchedule(id)
   res.json({
    status:true,
    message:'get date schedule',
    data:result
   })
   } catch (error) {
    res.json({
        status:false,
        message:'something went wrong  in date schedule',
        error
    })
   }
}


export const  tourController={
    createTour,
    getTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}