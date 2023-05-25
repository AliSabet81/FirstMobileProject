import { Box, Button, Grid, Typography } from "@mui/material";
import MyButton from "../../button";
interface IWithoutLimit {
    contentPosition:"right" | "left",
    img:string,
    title:string,
    desc:string ,
    button:string,
    xs:number,
    top?:string,
    textColor?:string
}

const HomeCard = (i:IWithoutLimit) => {
    const position = () => {
        switch (i.contentPosition) {
            case "right":
                return (
                    <Grid top={i.top} position={"absolute"} bottom={3} container>
                        <Grid color={i.textColor} px="20px" py="14px" item xs={i.xs}>
                            <Typography fontSize={16} fontWeight={600} variant="h4">{i.title}</Typography>
                            <Typography mb={1} fontSize={10} variant="body1">{i.desc}</Typography>
                            <MyButton width="103px" height={32} name={i.button} color={i.textColor ? "white" : "black"}/>
                        </Grid>
                    </Grid>
                );
            case "left":
                return (
                    <Grid position={"absolute"} bottom={3} container>
                        <Grid item xs={12-i.xs}>
                        </Grid>
                        <Grid color={i.textColor} px="20px" py="14px" left={0} item xs={i.xs}>
                            <Typography fontSize={16} fontWeight={600} variant="h4">{i.title}</Typography>
                            <Typography mb={1} fontSize={10} variant="body1">{i.desc}</Typography>
                            <MyButton width="103px" height={32} name={i.button} color={"black"}/>
                        </Grid>
                    </Grid>
                );
        }
    }
    return ( 
        <Box position={"relative"}>
            <Box width="100%" component={"img"} src={i.img} zIndex={"-1"}></Box>
            {position()}
        </Box>
     );
}
 
export default HomeCard;