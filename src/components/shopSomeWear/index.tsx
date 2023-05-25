import { Box, Typography, Grid } from "@mui/material";
import { Products } from "../../Routes/products";
import ProductCard from "../card/product";
import MyButton from "../button";

const ShopSomeWear = () => {
    return ( 
        <Box>
            <Typography fontSize={18} px={1} fontWeight={500}>Shop some Wear:</Typography>
            <Grid container>
                {Products.map((i)=><Grid p={1} item xs={6}><ProductCard img={i.img} category={i.category} name={i.name} price={i.price} index={i.index}/></Grid>)}
                <Grid mt={1} mx={"auto"} item xs={11}><MyButton width="100%" height={35} name={"SEE MORE"} color={"#C4C4C4"} /></Grid>
            </Grid>
        </Box>
     );
}
 
export default ShopSomeWear;