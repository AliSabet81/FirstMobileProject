import { Box, Button, Grid, Typography } from "@mui/material";
interface IWithoutLimit {
    position:"right" | "left",
    img:string,
    title:string,
    desc:string ,
    button:string,
}

const HomeDiscountCard = (i:IWithoutLimit) => {
    return ( 
        <Box position={"relative"}>
            <Box width="100%" component={"img"} src={i.img} zIndex={"-1"}></Box>
            <Grid position={"absolute"} bottom={6} container>
                <Grid  px="20px" py="14px" item xs={8}>
                    <Typography fontSize={26} mr={3} fontWeight={600} variant="h4">{i.title}</Typography>
                    <Typography fontSize={10} variant="body1">{i.desc}</Typography>
                    <Button size="small" sx={{fontWeight:600,width:"85px", height:"32px",fontSize:"10px",mt:"8px"}} variant="outlined">{i.button}</Button>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default HomeDiscountCard;