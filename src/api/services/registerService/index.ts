import { ILoginData } from "../../../screens/Auth/login/useLogin";
import { instance } from "../../constants";

type ITokenType = string
export const registerService = async(data:ILoginData) : Promise<ITokenType>  => {
    const res = await instance.post('/api/register',data)
    return res.data.token
}