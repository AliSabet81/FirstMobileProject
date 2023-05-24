import { ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "../theme";
import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
const Layout = () => {
    return ( 
        <ThemeProvider theme={MyTheme} >

        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Box>
        </ThemeProvider>
     );
}
 
export default Layout;