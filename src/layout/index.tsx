import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../theme";
import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
    return ( 
        <ThemeProvider theme={Theme} >

        <Box sx={{display:"flex",flexDirection:"column" ,gap:20}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Box>
        </ThemeProvider>
     );
}
 
export default Layout;