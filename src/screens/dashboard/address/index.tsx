import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import useAddress from "./useAddress";

const AddressBook = () => {
    const {
        register,
        handleSubmit,
        errors,
        handleAddress,
        Address,
        user
    } = useAddress()
    return ( 
        <Box p={1.5} display={"flex"} flexDirection={"column"} gap={2} component={"form"} onSubmit={handleSubmit(handleAddress)}>
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
                <Typography height={"27px"} fontSize={14} fontWeight={400}>company *</Typography>
                <TextField variant="outlined" {...register('company')} error={Boolean(errors.company?.message)} helperText={errors.company?.message} fullWidth />
            </Box>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>phoneNumber *</Typography>
                <TextField variant="outlined" {...register('phoneNumber')} error={Boolean(errors.phoneNumber?.message)} helperText={errors.phoneNumber?.message} fullWidth/>
            </Box>
            <Box>
                <Typography height={"27px"} fontSize={14} fontWeight={400}>Fax *</Typography>
                <TextField variant="outlined" {...register('fax')} error={Boolean(errors.fax?.message)} helperText={errors.fax?.message} fullWidth/>
            </Box>
            <LoadingButton loading={Address} variant="contained" fullWidth sx={{color:"white",bgcolor:"black"}} type="submit">Save</LoadingButton>
        </Box>
     );
}
 
export default AddressBook;
