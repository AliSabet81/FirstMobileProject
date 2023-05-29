import { ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "../theme";
import Footer from "./footer";
import Header from "./header";
import { Outlet, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import CheckGroup from "./footer/Checksgroup";
import { Products } from "../Routes/products";
const Layout = () => {
    return ( 
        <ThemeProvider theme={MyTheme} >

        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Header/>
            <Outlet/>
            <CheckGroup/>
            <Footer/>
        </Box>
        </ThemeProvider>
     );
}
 
export default Layout;