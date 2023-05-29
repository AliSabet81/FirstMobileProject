import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

export const store = createContext({
    UserLogin:false,
    setUserLogin:()=>{}
} as {
    UserLogin:Boolean,
    setUserLogin:Dispatch<SetStateAction<boolean>>
})

export const StoreProvider = ({children}:{children:ReactElement}) =>{
    const [UserLogin,setUserLogin] = useState(false)
    const storeValues = {
        UserLogin : UserLogin ,
        setUserLogin : setUserLogin
    }
    
    return <store.Provider value={storeValues}>{children}</store.Provider>
}