import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import ProductSwiper from "../../components/productSwiper";
import { IProductCard } from "../../Routes/products";
import { useState } from "react";



const ProductPage = (i:IProductCard) => {
    const [Count,setCount] = useState(0)
    return ( 
        <Box p={1.5}>
            <Typography my={2} fontSize={14} fontWeight={500} color={"#828282"}>HOME{i.path}</Typography>
            <ProductSwiper img={i.img}/>
            <Box display={"flex"} gap={1}>
                <Typography fontSize={18} fontWeight={600}>{i.name}</Typography>
                <Typography p={1} sx={{borderRadius:"0",bgcolor:"#E6F1FA",fontSize:"10px",height:"fit-content"}}>{i.brand}</Typography>
            </Box>
            <Grid mt={2} container>
                <Grid gap={1} display={"flex"} flexDirection={"column"} item>
                    <Typography>Quantity</Typography>
                    <ButtonGroup>
                        <Button onClick={()=>setCount(Count - 1)}>-</Button>
                        <Button>{Count}</Button>
                        <Button onClick={()=>setCount(Count + 1)}>+</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item></Grid>
            </Grid>
        </Box>
     );
}
 
export default ProductPage;