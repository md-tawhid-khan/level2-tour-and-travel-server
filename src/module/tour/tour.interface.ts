import { HydratedDocument, Model } from "mongoose";

export interface ITour {
    name:string,
    durationHours:number,
    averageRating:number,
    price:number,
    coverImage:string,
    images:string[],
    startingDate:Date[],
    startLocation:string,
    location:string[],
    slug:string
}



export interface ITourMethods {
    getNextNearestDateAndEndDate():{
        nearestStartDate:Date|null,
        estimatedEndData:Date|null
    }
}



// interface UserModel extends Model<IUser, {}, IUserMethods> {
//     createWithFullName(name: string): Promise<HydratedDocument<IUser, IUserMethods>>;
//   }

 interface ITourModel extends Model<ITour,Record<string,unknown>,ITourMethods>{
    startingDate:Date[]
    durationHours:number
    getNextNearestDateAndEndDate():Promise<HydratedDocument<ITour,ITourMethods>>;
 }

// type ITourModel =Model<ITour,Record<string,unknown>,ITourMethods> 

export default ITourModel 