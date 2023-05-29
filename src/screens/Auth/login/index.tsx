import { Box, Button, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import useLogin from "./useLogin";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ROUTES } from "../../../Routes";
import { LoadingButton } from "@mui/lab";
import { useContext } from "react";
import { store } from "../../../context";
const LoginPage = ({path}:{path:string}) => {
    const {
        register,
        handleSubmit,
        errors,
        handleLogin,
        passwordType,
        setPasswordType,
        Login
    } = useLogin()
    return ( 
        <Box p={1.5} display={"flex"} flexDirection={"column"} gap={2} component={"form"} onSubmit={handleSubmit(handleLogin)}>
            <Typography my={2} fontSize={14} fontWeight={500} color={"#828282"}>HOME{path}</Typography>
            <Typography fontSize={20} fontWeight={500}>Login</Typography>
            <Divider/>
            <Typography fontSize={16} fontWeight={600} color={"#828282"}>Enter Your Acount Information</Typography>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>e-mail *</Typography>
                <TextField variant="outlined" {...register('email')} error={Boolean(errors.email?.message)} helperText={errors.email?.message} fullWidth />
            </Box>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>password *</Typography>
                <TextField type={passwordType} variant="outlined" {...register('password')} error={Boolean(errors.password?.message)} helperText={errors.password?.message} fullWidth InputProps={{
                    endAdornment:( 
                        <InputAdornment position="start">
                            <IconButton onClick={()=>{
                                setPasswordType((prev)=>{
                                    if (prev === 'password') return 'text'
                                    return 'password'
                                })
                                }}>
                                {passwordType === "text" ?<VisibilityIcon/> : <VisibilityOffIcon/>}
                            </IconButton>
                        </InputAdornment>),
                }} />
            </Box>
            <LoadingButton loading={Login} variant="contained" fullWidth sx={{color:"white",bgcolor:"black"}} type="submit">Submit</LoadingButton>
            <Divider>OR</Divider>
            <LoadingButton href={ROUTES.Register} variant="contained" fullWidth sx={{color:"white",bgcolor:"black"}}>Register</LoadingButton>
        </Box>
     );
}
 
export default LoginPage;
