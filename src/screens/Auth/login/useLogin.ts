import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useContext, useState } from "react";
import Cookies from "js-cookie"
import { registerService } from "../../../api/services/registerService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { store } from "../../../context";

export interface ILoginData {
    email:string,
    password:string,
    company?:string,
    phoneNumber?:string,
}

const useLogin = () => {
    const {setUserLogin} = useContext(store)

    const Navigate = useNavigate()
    const [Login,setLogin] = useState<boolean>(false)
    const [passwordType , setPasswordType] = useState<'password' | 'text'>('password')
    const LoginSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8)
    })
    const {register , handleSubmit , formState:{errors}} = useForm<ILoginData>({
        resolver: yupResolver(LoginSchema),
        mode:"onSubmit"
    })
    
    const handleLogin = (data:ILoginData) => {
        setLogin(true)
        console.log(data)
        registerService(data).then(res=>{
            toast.success('You Login successfully')
            Cookies.set('token' , res,{
                expires: 7
            })
            setLogin(false)
            setUserLogin(true)
            Navigate('/')
        }).catch(()=>{
            setLogin(false)
            toast.error('something wrong')
        })
    }
    return {
        register,
        handleSubmit,
        errors,
        handleLogin,
        passwordType,
        setPasswordType,
        Login
    };
}
 
export default useLogin;