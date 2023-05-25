import { Box, Divider, TextField, Typography } from "@mui/material";

const LoginPage = ({path}:{path:string}) => {
    return ( 
        <Box p={1.5}>
            <Typography my={2} fontSize={14} fontWeight={500} color={"#828282"}>HOME{path}</Typography>
            <Typography fontSize={20} fontWeight={500}>Login</Typography>
            <Divider/>
            <Typography fontSize={16} fontWeight={600} color={"#828282"}>Enter Your Acount Information</Typography>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>e-mail *</Typography>
                <TextField variant="outlined"   fullWidth />
            </Box>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>password *</Typography>
                <TextField variant="outlined" fullWidth />
            </Box>
        </Box>
     );
}
 
export default LoginPage;