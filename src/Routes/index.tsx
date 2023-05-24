import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/home";
import Layout from "../layout";

export const ROUTES = {
    Home : "/"
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
            
        ]
    }
])