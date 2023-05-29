import { useContext } from "react";
import { store } from "../context";
import  Cookies  from 'js-cookie';

const useLogin = () => {
    const {setUserLogin} = useContext(store)
    if(Cookies.get('token')){
        setUserLogin(true)
      } 
}
 
export default useLogin;