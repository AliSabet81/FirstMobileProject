import { Box, Grid, Typography } from "@mui/material";
import { Products } from "../../Routes/products";
import ProductCard from "../card/product";
import MyButton from "../button";

const MostPopular = () => {
    return ( 
        <Box>
            <Typography fontSize={18} px={1} fontWeight={500}>Most Popular:</Typography>
            <Grid container>
                {Products.filter(e=>e.index < 5).map((i)=><Grid key={i.index} p={1} item xs={6}><ProductCard img={i.img} category={i.category} name={i.name} price={i.price} index={i.index} path={i.path}/></Grid>)}
            </Grid>
        </Box>
     );
}
 
export default MostPopular;