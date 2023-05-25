import { Box, Button, Grid, Typography } from "@mui/material";
import MyButton from "../../button";
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
                    <Typography mb={1} fontSize={10} variant="body1">{i.desc}</Typography>
                    <MyButton width="103px" height={32} name={i.button} color={"black"}/>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default HomeDiscountCard;