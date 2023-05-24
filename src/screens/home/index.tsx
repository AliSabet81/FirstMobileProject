import { Box } from "@mui/material";
import HomeCard from "../../components/card/homeCard";
import HomeCard1 from "../../../public/homeCard1.png"
import HomeCard2 from "../../../public/homeCard2.png"
import HomeCard3 from "../../../public/homeCard3.png"
import HomeDiscountCard from "../../components/card/homeDiscountCard";
import HomeSwiper from "../../components/homeswiper";
// import HomeSwiper from "../../components/homeswiper";

const HomeScreen = () => {
    return ( 
        <Box>
            <Box width={320} height={497}>
            <HomeSwiper/>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1.8} p={1.7}>
            <HomeCard img={HomeCard1} title={"CHOOSE YOUR LOOK"} desc={"See our clothing collections"} button={"SEE OFFER"} xs={6} contentPosition={"left"}/>
            <HomeDiscountCard position={"right"} img={HomeCard2} title={"UP TO 40% OFF"} desc={"Special offers and great deals"} button={"SHOP NOW"}/>
            <HomeCard img={HomeCard3} title={"BRAND NEW STYLE"} desc={"Popular clothing brands"} button={"SEE OFFER"} xs={9} contentPosition={"right"} top="16px"/>
            </Box>
        </Box>
     );
}
 
export default HomeScreen;