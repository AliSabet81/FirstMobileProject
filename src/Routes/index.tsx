import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import React, { useContext } from "react";
import { store } from "../context";
import useLogin from "../hooks/useLogin";
import ProductPage from "../screens/product";
const HomeScreen = React.lazy(()=>import("../screens/home"))
const ShopScreen = React.lazy(()=>import("../screens/shop"))
const LoginScreen = React.lazy(()=>import("../screens/Auth/login"))
const RegisterScreen = React.lazy(()=>import("../screens/Auth/register"))
const DashboardScreen = React.lazy(()=>import("../screens/dashboard"))
const AcountDashboard = React.lazy(()=>import("../screens/dashboard/account"))
import Product1 from "../../public/product1.png"

export const ROUTES = {
    Home : "/",
    Shop : "/Shop",
    Acount : "/account",
    dashboard : "/account/dashboard",
    Register : "/register",
    Product:"/shop/product"
}

export const Login = () =>{
    const {UserLogin} = useContext(store)
    useLogin()
    return UserLogin ? <DashboardScreen/> : <LoginScreen path={ROUTES.Acount}/>
}


export const Router = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                path : ROUTES.Home,
                element : <HomeScreen/>
            },
            {
                path : ROUTES.Shop,
                element : <ShopScreen path={ROUTES.Shop}/>
            },
            {
                path : ROUTES.Acount,
                element : <Login/>,
                children:[
                    {
                        path:ROUTES.dashboard,
                        element:<AcountDashboard/>
                    }
                ]
            },
            {
                path : ROUTES.Register,
                element : <RegisterScreen path={ROUTES.Register}/>
            },
            
            {
                path:ROUTES.Product,
                element:<ProductPage img={Product1} category={"TOP women"} name={"Angels malu zip jeans slim black used"} brand="FENDI" price={139.11} path={ROUTES.Product} index={0}/>
            }
        ]
    }
])