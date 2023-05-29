import { Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import MyButton from "../../button";

interface IBestOfYou{
    img : string,
    title: string,
    desc: string
}

const BestOfYouCard = (i:IBestOfYou) => {
    return ( 
        <Grid justifyContent={"center"} alignItems={"flex-end"} height={252} container>
            <Grid position={"absolute"} height={252} item xs={12} component={"img"} src={i.img} zIndex={"-1"}></Grid>
            <Grid item mb={2} height={139} xs={11}>
            <Card sx={{borderRadius:"0"}}>
                <CardContent sx={{padding:"13px 20px !important",border:2,borderColor:"#C4C4C4",borderRadius:"0"}}>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>

                    <Typography textAlign={"center"} fontSize={14} fontWeight={500} variant="h5" component="div">{i.title}</Typography>
                    <Typography mt={"18px"} mb={"8px"} textAlign={"center"} fontSize={10} variant="body2">{i.desc}</Typography>
                    <CardActions sx={{padding:0}}>
                        <MyButton width="103px" height={32} name={"SHOP NOW"} color={"black"}/>
                    </CardActions>
                    </Box>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
     );
}
 
export default BestOfYouCard;