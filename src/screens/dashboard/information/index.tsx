import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useInformation from "./useInformation";
import { LoadingButton } from '@mui/lab';

const AccountInformation = () => {
    const {
        register,
        handleSubmit,
        errors,
        handleLogin,
        passwordType,
        setPasswordType,
        Information,
        user
    } = useInformation()
    return ( 
        <Box p={1.5} display={"flex"} flexDirection={"column"} gap={2} component={"form"} onSubmit={handleSubmit(handleLogin)}>
            <Typography fontSize={16} fontWeight={600} color={"#828282"}>Account Information</Typography>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>First Name *</Typography>
                <TextField variant="outlined" value={user?.first_name} {...register('firstName')} error={Boolean(errors.firstName?.message)} helperText={errors.firstName?.message} fullWidth />
            </Box>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>Last Name *</Typography>
                <TextField variant="outlined" value={user?.last_name} {...register('lastName')} error={Boolean(errors.lastName?.message)} helperText={errors.lastName?.message} fullWidth />
            </Box>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>e-mail *</Typography>
                <TextField variant="outlined" value={user?.email} {...register('email')} error={Boolean(errors.email?.message)} helperText={errors.email?.message} fullWidth />
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
            <LoadingButton loading={Information} variant="contained" fullWidth sx={{color:"white",bgcolor:"black"}} type="submit">Save</LoadingButton>
        </Box>
     );
}
 
export default AccountInformation;
