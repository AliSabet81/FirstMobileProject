import { Box, Grid, Typography } from "@mui/material";
import HomeCard from "../../components/card/homeCard";
import WithouLimit1 from "../../../public/withoutLimit1.png"
import WithouLimit2 from "../../../public/withoutLimit2.png"
import { Products } from "../../Routes/products";
import ProductCard from "../../components/card/product";
interface IShopScreen{
    path:string,
}
const ShopScreen = (i:IShopScreen) => {
    return ( 
        <Box p={1.5}>
            <HomeCard contentPosition={"right"} img={WithouLimit1} title={"shoping without limits."} desc={"Choose the best option for you, and it does not matter whether you are."} button={"SHOP NOW"} xs={9}/>
            <Typography my={2} fontSize={14} fontWeight={500} color={"#828282"}>HOME{i.path}</Typography>
            <Grid container>
                {Products.map((i)=><Grid key={i.index} p={1} item xs={6}><ProductCard img={i.img} category={i.category} name={i.name} price={i.price} index={i.index} path={""}/></Grid>)}
            </Grid>
            <HomeCard contentPosition={"right"} textColor="white" img={WithouLimit2} title={"shoping without limits."} desc={"Choose the best option for you, and it does not matter whether you are."} button={"SHOP NOW"} xs={9}/>
            <Grid container>
                {Products.map((i)=><Grid key={i.index} p={1} item xs={6}><ProductCard img={i.img} category={i.category} name={i.name} price={i.price} index={i.index} path={""}/></Grid>)}
            </Grid>
        </Box>
     );
}
 
export default ShopScreen;