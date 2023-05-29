import { Box, Grid, Typography } from "@mui/material";
import MyButton from "../../button";

interface IHomeSlide{
    img:string,
    title:string,
    button:string,
    subImg1:string,
    subImg2:string,
}

const HomeSlide = (i:IHomeSlide) => {
    return ( 
        <Grid container>
            <Box position={"absolute"} zIndex={"-1"} component={"img"} width={320} height={497} src={i.img}></Box>
            <Grid display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} p={1.5} item xs={12}>
                <Box position={"relative"} width={"207px"} height={"207px"}>
                    <Box right={0} position={"absolute"} zIndex={"1"} component={"img"} width={137} height={207} src={i.subImg1}></Box>
                    <Box top={12} left={0} position={"absolute"} zIndex={"-1"} component={"img"} width={122} height={182} src={i.subImg2}></Box>
                </Box>
                <Typography textAlign={"center"} fontSize={30} fontWeight={600}>{i.title}</Typography>
                <MyButton width="115px" height={41} name={i.button} color={"black"}/>
            </Grid>
        </Grid>
     );
}
 
export default HomeSlide;