import { Box, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useRegister from "./useRegister";
import { LoadingButton } from '@mui/lab';
import { ROUTES } from "../../../Routes";
import useAuth from "../../../hooks/useAuth";

const RegisterPage = ({path}:{path:string}) => {
    useAuth()
    const {
        register,
        handleSubmit,
        errors,
        handleLogin,
        passwordType,
        setPasswordType,
        Register
    } = useRegister()
    return ( 
        <Box p={1.5} display={"flex"} flexDirection={"column"} gap={2} component={"form"} onSubmit={handleSubmit(handleLogin)}>
            <Typography my={2} fontSize={14} fontWeight={500} color={"#828282"}>HOME{path}</Typography>
            <Typography fontSize={20} fontWeight={500}>Register</Typography>
            <Divider/>
            <Typography fontSize={16} fontWeight={600} color={"#828282"}>Enter Your Acount Information</Typography>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>First Name *</Typography>
                <TextField variant="outlined" {...register('firstName')} error={Boolean(errors.firstName?.message)} helperText={errors.firstName?.message} fullWidth />
            </Box>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>Last Name *</Typography>
                <TextField variant="outlined" {...register('lastName')} error={Boolean(errors.lastName?.message)} helperText={errors.lastName?.message} fullWidth />
            </Box>
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
            <LoadingButton loading={Register} variant="contained" fullWidth sx={{color:"white",bgcolor:"black"}} type="submit">Submit</LoadingButton>
            <Divider>OR</Divider>
            <LoadingButton href={ROUTES.Acount} variant="contained" fullWidth sx={{color:"white",bgcolor:"black"}}>Login</LoadingButton>
        </Box>
     );
}
 
export default RegisterPage;
