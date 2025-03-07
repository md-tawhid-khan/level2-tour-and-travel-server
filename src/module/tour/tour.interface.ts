import { Model } from "mongoose";

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

// type UserModel = Model<IUser, {}, IUserMethods>;

type ITourModel =Model<ITour,Record<string,unknown>,ITourMethods> 

export default ITourModel 