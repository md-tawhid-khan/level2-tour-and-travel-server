export interface IUser {
     name:string,
     email:string,
     age:number,
     photo?:string | null,
     role:"user"|"admin",
     userStatus:"active"|"inactive"
}