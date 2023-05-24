import { Box, Divider } from "@mui/material";
import CollapseComponent from "../../components/collapse";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <Box px={2} py={3} gap={4} sx={{bgcolor:'black',color:'white',textAlign:"start",display:"flex",flexDirection:"column"}}>
            <Box sx={{width:102,height:44,alignSelf:"center"}} margin={"auto"} component={"img"} src="Logo.png">
            </Box>
            <Box gap={1.5} sx={{display:"flex",flexDirection:"column"}}>
            <CollapseComponent links={["sdfg", "asdfgh", "asdfgh"]} name={"features"}/>
            <Divider sx={{bgcolor:'white'}}/>
            <CollapseComponent links={["sdfg", "asdfgh", "asdfgh"]} name={"Menu"}/>
            <Divider sx={{bgcolor:'white'}}/>
            <CollapseComponent links={["sdfg", "asdfgh", "asdfgh"]} name={"contact us"}/>
            <Divider sx={{bgcolor:'white'}}/>
            <CollapseComponent links={["sdfg", "asdfgh", "asdfgh"]} name={"follow us"}/>
            <Divider sx={{bgcolor:'white'}}/>
            </Box>
        </Box>
     );
}
 
export default Footer;