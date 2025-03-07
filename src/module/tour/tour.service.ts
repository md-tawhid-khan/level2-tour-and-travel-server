import { ITour } from "./tour.interface"
import Tour from "./tour.model"

const createTour=async(payload : ITour)=>{
    const result=await Tour.create(payload)
    return result
}

const getTour=async()=>{
    const result=await Tour.find()
    return result
}
const getSingleTour=async(id:string)=>{
    const result=await Tour.findById(id)
    return result
}

const updateTour=async(id:string,data:ITour)=>{
    const result=await Tour.findByIdAndUpdate(id,data,{new:true})
    return result
}

const deleteTour=async(id:string)=>{
    const result= await Tour.findByIdAndDelete(id,{new:true})
    return result
}

const getNextSchedule=async(id:string)=>{
    // const tour=await Tour.findById(id)
//    const nextSchedule= tour?.getNextNearestDateAndEndDate()
     const nextSchedule= await Tour.getNextNearestDateAndEndDate()
   return {
    tour,
    nextSchedule
   }
}


export  const tourServices={
    createTour,
    getTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}