import { instance } from "../../constants";

export interface IUserType{
    avatar:string;
    email:string;
    first_name:string;
    id:number,
    last_name:string
}

export const userService = async () : Promise<IUserType> => {
    const res = await instance.get('/api/users/2')
    return res.data.data
}