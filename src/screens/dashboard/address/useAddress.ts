import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { registerService } from "../../../api/services/registerService";
import { IUserType, userService } from "../../../api/services/userService";
interface IAdrress {
    company:string,
    phoneNumber:string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    fax:string
}

const useAddress = () => {
    const [user,setUser] = useState<IUserType>()
    useEffect(()=>{
        userService().then(res =>{
            setUser(res)
        })
    },[])
    const [Address,setAddress] = useState<boolean>(false)

    const LoginSchema = yup.object({
        company: yup.string().required(),
        phoneNumber: yup.string().required(),
        firstName : yup.string().required(),
        lastName: yup.string().required(),
        fax:yup.string().required()
    })
    const {register , handleSubmit , formState:{errors}} = useForm<IAdrress>({
        resolver: yupResolver(LoginSchema),
        mode:"onSubmit"
    })
    
    const handleAddress = (data:IAdrress) => {
        console.log(data)
        setAddress(true)
        registerService(data).then(()=>{
            toast.success('You Register successfully')
            setAddress(false)
        }).catch(()=>{
            setAddress(false)
            toast.error('something wrong')
        })
    }
    return {
        register,
        handleSubmit,
        errors,
        handleAddress,
        Address,
        user
    };
}
 
export default useAddress;