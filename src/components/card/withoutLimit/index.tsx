import { Box, Button, Grid, Typography } from "@mui/material";

const WithoutLimitCard = () => {
    return ( 
        <Box>
            <Box></Box>
            <Grid container>
            <Grid item xs={9}>
                <Typography  variant="h4">shoping without limits.</Typography>
                <Typography variant="body1">Choose the best option for you, and it does not matter whether you are.</Typography>
                <Button>Shop now</Button>
            </Grid>
            </Grid>
        </Box>
     );
}
 
export default WithoutLimitCard;