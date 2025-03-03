import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema= new Schema<IUser>({
    name:{type:String,required:[true,"please provide your name"],minlength:3,maxlength:50},
    age:{type:Number, required:[true,"please provide your age"]},
    email:{type:String,required:[true,"please provide your email" ],unique:true, validate:{
            validator:function(values:string){
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values)
        },
        message:`{VALUE} is not valid email`,
    }   
    },
    photo:{type:String},
    role:{type:String, enum:{values:['admin','user'],message:`{VALUE} is not valid`}, required:[true,"please provide your role "]},
    userStatus:{type:String, enum:{values:['active','inactive']}, required:[true,"please provide your userStatus"]}
})

const User=model<IUser>('user',userSchema)
export default User