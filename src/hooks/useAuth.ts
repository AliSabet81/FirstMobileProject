import { useEffect } from "react";
import  Cookies  from 'js-cookie';
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes";
import { instance } from "../api/constants";

export const useAuth = () => {
    const Navigate = useNavigate()
    const {pathname} = useLocation()
    return ( 
        useEffect(()=>{
            if(!Cookies.get('token')){
                Navigate(ROUTES.Acount)
            }else{
                instance.defaults.headers.common.Authorization = Cookies.get('token')
                if(pathname === ROUTES.Acount){
                    Navigate(ROUTES.Home)
                }
            }
        },[])
     );
}
 
export default useAuth;