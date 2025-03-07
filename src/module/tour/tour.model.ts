import { model, Schema } from "mongoose";
import ITourModel, { ITour, ITourMethods } from "./tour.interface";

const tourSchema= new Schema<ITour,ITourModel,ITourMethods>({
 name:{
    type:String,required:true
},
durationHours:{
    type:Number,
    required:true
},
averageRating:{
    type:Number,
    required:true
},
price:{
    type:Number,
    required:true
},
coverImage:{
    type:String,
    required:true
},
images:[String],
startingDate:[Date],
startLocation:{type:String},
location:[String],
slug:{type:String}
})

// tourSchema.methods.getNextNearestDateAndEndDate=function(){
//     const today=new Date() ;
//    const futureDate=this.startingDate.filter((startDate:Date)=>{
//     return startDate>today
//    })
//    futureDate.sort((a:Date,b:Date)=>a.getTime()-b.getDate())
//   const nearestStartDate=futureDate[0]
//   const estimatedEndData=new Date(nearestStartDate.getTime() + this.durationHours*60*60*1000)
//   return {
//     estimatedEndData,
//     nearestStartDate
//   }
// }

tourSchema.static('getNextNearestDateAndEndDate',function getNextNearestDateAndEndDate(){
   const today=new Date()
   const futureDate=this.startingDate.filter((startDate:Date)=>{
    return startDate>today;
   })
   futureDate.sort((a:Date,b:Date)=>a.getTime()-b.getDate()
   )
   const nearestStartDate=futureDate[0]
   const estimatedEndData=new Date(nearestStartDate.getTime() + this.durationHours*60*60*1000)
   return {
    nearestStartDate,
    estimatedEndData
   }
})

const Tour= model<ITour,ITourModel>('tour',tourSchema)

export default Tour