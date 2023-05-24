import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

export const store = createContext({
    Login:false,
    setLogin:()=>{}
} as {
    Login:Boolean,
    setLogin:Dispatch<SetStateAction<boolean>>
})

export const StoreProvider = ({children}:{children:ReactElement}) =>{
    const [Login,setLogin] = useState(false)
    const storeValues = {
        Login : Login ,
        setLogin : setLogin
    }
    return <store.Provider value={storeValues}>{children}</store.Provider>
}