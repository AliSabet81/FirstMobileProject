import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { IUserType, userService } from "../../../api/services/userService";

const AcountDashboard = () => {
    const [user,setUser] = useState<IUserType>()
    useEffect(()=>{
        userService().then(res =>{
            setUser(res)
        })
    },[])
    return ( 
        <Box display={ "flex"} m={2} flexDirection={"column"} mb={5} gap={2}>
            <Typography color={"#828282"}>Account Information</Typography>
            <Box display={ "flex"} flexDirection={"column"} gap={0.5}>
                <Typography fontSize={12} fontWeight={600} variant="body1">Contact Information</Typography>
                <Box display={"flex"} gap={1}>
                <Typography color={"#828282"} fontSize={12} fontWeight={400} variant="body2">{user?.first_name}</Typography>
                <Typography color={"#828282"} fontSize={12} fontWeight={400} variant="body2">{user?.last_name}</Typography>
                </Box>
                <Typography color={"#828282"} fontSize={12} fontWeight={400}>{user?.email}</Typography>
                <Box><Button sx={{borderRadius:"0",bgcolor:"#E6F1FA",height:"20px",fontSize:"10px",mr:"10px"}}>Edit</Button><Button sx={{borderRadius:"0",bgcolor:"#E6F1FA",height:"20px",fontSize:"10px"}}>Change Password</Button></Box>
            </Box>
            <Box display={ "flex"} flexDirection={"column"} gap={0.5}>
                <Typography fontSize={12} fontWeight={600} variant="body1">Newsletters</Typography>
                <Typography color={"#828282"} fontSize={12} fontWeight={400}>You don't subscribe to our newsletter.</Typography>
                <Box><Button sx={{borderRadius:"0",bgcolor:"#E6F1FA",height:"20px",fontSize:"10px"}}>Edit</Button></Box>
            </Box>
            <Box display={ "flex"} flexDirection={"column"} gap={0.5}>
            <Typography color={"#828282"}>Address Book</Typography>
                <Typography fontSize={12} fontWeight={600} variant="body1">Default Billing Address</Typography>
                <Typography color={"#828282"} fontSize={12} fontWeight={400}>You have not set a default billing address.</Typography>
                <Box><Button sx={{borderRadius:"0",bgcolor:"#E6F1FA",height:"20px",fontSize:"10px"}}>Edit Address</Button></Box>
            </Box>
            <Box display={ "flex"} flexDirection={"column"} gap={0.5}>
                <Typography fontSize={12} fontWeight={600} variant="body1">Default Shipping Address</Typography>
                <Typography color={"#828282"} fontSize={12} fontWeight={400}>You have not set a default shipping address.</Typography>
                <Box><Button sx={{borderRadius:"0",bgcolor:"#E6F1FA",height:"20px",fontSize:"10px"}}>Edit Address</Button></Box>
            </Box>
        </Box>
     );
}
 
export default AcountDashboard;