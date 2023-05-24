import { Box, Button, Grid, Typography } from "@mui/material";
interface IWithoutLimit {
    contentPosition:"right" | "left",
    img:string,
    title:string,
    desc:string ,
    button:string,
    xs:number,
    top?:string
}

const HomeCard = (i:IWithoutLimit) => {
    const position = () => {
        switch (i.contentPosition) {
            case "right":
                return (
                    <Grid top={i.top} position={"absolute"} bottom={3} container>
                        <Grid  px="20px" py="14px" item xs={i.xs}>
                            <Typography fontSize={16} fontWeight={600} variant="h4">{i.title}</Typography>
                            <Typography fontSize={10} variant="body1">{i.desc}</Typography>
                            <Button size="small" sx={{fontWeight:600,width:"85px", height:"32px",fontSize:"10px",mt:"8px"}} variant="outlined">{i.button}</Button>
                        </Grid>
                    </Grid>
                );
            case "left":
                return (
                    <Grid position={"absolute"} bottom={3} container>
                        <Grid item xs={12-i.xs}>
                        </Grid>
                        <Grid  px="20px" py="14px" left={0} item xs={i.xs}>
                            <Typography fontSize={16} fontWeight={600} variant="h4">{i.title}</Typography>
                            <Typography fontSize={10} variant="body1">{i.desc}</Typography>
                            <Button size="small" sx={{fontWeight:600,width:"85px", height:"32px",fontSize:"10px",mt:"8px"}} variant="outlined">{i.button}</Button>
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