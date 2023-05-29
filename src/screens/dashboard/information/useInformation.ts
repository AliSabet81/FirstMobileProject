import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../../api/services/registerService";
import { ROUTES } from "../../../Routes";
import { IUserType, userService } from "../../../api/services/userService";
interface IInformation {
    email:string,
    password:string,
    firstName:string,
    lastName:string
}

const useInformation = () => {
    const Navigate = useNavigate()
    const [user,setUser] = useState<IUserType>()
    useEffect(()=>{
        userService().then(res =>{
            setUser(res)
        })
    },[])
    const [Information,setInformation] = useState<boolean>(false)

    const [passwordType , setPasswordType] = useState<'password' | 'text'>('password')
    const LoginSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
        firstName : yup.string().required(),
        lastName:yup. string().required()
    })
    const {register , handleSubmit , formState:{errors}} = useForm<IInformation>({
        resolver: yupResolver(LoginSchema),
        mode:"onSubmit"
    })
    
    const handleLogin = (data:IInformation) => {
        console.log(data)
        setInformation(true)
        registerService(data).then(()=>{
            toast.success('You Register successfully')
            setInformation(false)
            Navigate(ROUTES.Acount)
        }).catch(()=>{
            setInformation(false)
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
        Information,
        user
    };
}
 
export default useInformation;