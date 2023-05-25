import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import React from "react";
const HomeScreen = React.lazy(()=>import("../screens/home"))
const ShopScreen = React.lazy(()=>import("../screens/shop"))
const LoginScreen = React.lazy(()=>import("../screens/Auth/login"))

export const ROUTES = {
    Home : "/",
    Shop : "/Shop",
    Login : "/Login"
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
                element : <ShopScreen path={"/shop/brand"}/>
            },
            {
                path : ROUTES.Login,
                element : <LoginScreen path={"/Auth/Login"}/>
            }
        ]
    }
])