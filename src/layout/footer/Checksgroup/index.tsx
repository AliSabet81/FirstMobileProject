import { Box, Grid, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
const CheckGroup = () => {
    return ( 
        <Box bgcolor={"#E6F1FA"} px={6} py={2.5} display={"flex"} flexDirection={"column"} gap={1.5}>
            <Box display={"flex"} gap={"14px"}><CheckIcon fontSize="30"/> <Typography fontSize={12} fontWeight={700}>Duties and Taxes Guaranteed</Typography></Box>
            <Box display={"flex"} gap={"14px"}><CheckIcon fontSize="30"/> <Typography fontSize={12} fontWeight={700}>Free Express Shipping</Typography></Box>
            <Box display={"flex"} gap={"14px"}><CheckIcon fontSize="30"/> <Typography fontSize={12} fontWeight={700}>Customer Love</Typography></Box>
            <Box display={"flex"} gap={"14px"}><CheckIcon fontSize="30"/> <Typography fontSize={12} fontWeight={700}>Easy Returns</Typography></Box>
            <Box display={"flex"} gap={"14px"}><CheckIcon fontSize="30"/> <Typography fontSize={12} fontWeight={700}>Secure Payment</Typography></Box>
            
        </Box>
     );
}
 
export default CheckGroup;