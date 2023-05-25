import { Box, Button, Grid } from "@mui/material";
import HomeCard from "../../components/card/homeCard";
import HomeCard1 from "../../../public/homeCard1.png"
import WithouLimit from "../../../public/withoutLimit.png"

import HomeCard2 from "../../../public/homeCard2.png"
import HomeCard3 from "../../../public/homeCard3.png"
import BestOfYou from "../../../public/bestOfYou.png"
import HomeDiscountCard from "../../components/card/homeDiscountCard";
import HomeSwiper from "../../components/homeswiper";
import { Categories } from "../../Routes/categories";
import Blog from "../../components/blog";
import BestOfYouCard from "../../components/card/theBestOfYou";
import MyButton from "../../components/button";
import FeaturedItem from "../../components/featuredItems";
import MostPopular from "../../components/mostPopular";
import ShopSomeWear from "../../components/shopSomeWear";
// import HomeSwiper from "../../components/homeswiper";

const HomeScreen = () => {
    return ( 
        <Box>
            <Box width={320} height={497}>
            <HomeSwiper/>
            </Box>
            
            <Box display={"flex"} flexDirection={"column"} gap={1.8} p={1.7}>
            <Grid container>
                {Categories.map((i)=><Grid p={1} item xs={6}><MyButton Link="/shop" width="100%" height={55} name={i.name} color={"#C4C4C4"}/></Grid> )}
            </Grid>
            <HomeCard img={HomeCard1} title={"CHOOSE YOUR LOOK"} desc={"See our clothing collections"} button={"SEE OFFER"} xs={6} contentPosition={"left"}/>
            <HomeDiscountCard position={"right"} img={HomeCard2} title={"UP TO 40% OFF"} desc={"Special offers and great deals"} button={"SHOP NOW"}/>
            <HomeCard img={HomeCard3} title={"BRAND NEW STYLE"} desc={"Popular clothing brands"} button={"SEE OFFER"} xs={9} contentPosition={"right"} top="16px"/>
            <ShopSomeWear/>
            <HomeCard img={WithouLimit} title={"shoping without limits."} desc={"Choose the best option for you, and it does not matter whether you are."} button={"SHOP NOW"} xs={9}  contentPosition={"right"}/>
            <FeaturedItem/>
            <MostPopular/>
            <BestOfYouCard img={BestOfYou} title={"EXPLORE THE BEST OF YOU."} desc={"You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco."}/>
            </Box>
            <Blog/>
        </Box>
     );
}
 
export default HomeScreen;