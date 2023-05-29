import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../../api/services/registerService";
import { ROUTES } from "../../../Routes";
interface ILoginData {
    email:string,
    password:string,
    firstName:string,
    lastName:string
}

const useRegister = () => {
    const Navigate = useNavigate()

    const [Register,setRegister] = useState<boolean>(false)

    const [passwordType , setPasswordType] = useState<'password' | 'text'>('password')
    const LoginSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
        firstName : yup.string().required(),
        lastName:yup. string().required()
    })
    const {register , handleSubmit , formState:{errors}} = useForm<ILoginData>({
        resolver: yupResolver(LoginSchema),
        mode:"onSubmit"
    })
    
    const handleLogin = (data:ILoginData) => {
        console.log(data)
        setRegister(true)
        registerService(data).then(()=>{
            toast.success('You Register successfully')
            setRegister(false)
            Navigate(ROUTES.Acount)
        }).catch(()=>{
            setRegister(false)
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
        Register
    };
}
 
export default useRegister;