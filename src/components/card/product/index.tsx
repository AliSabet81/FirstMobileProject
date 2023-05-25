import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { IProductCard } from "../../../Routes/products";

const ProductCard = (i:IProductCard) => {
    return ( 
        <Card variant="outlined" sx={{ maxWidth: 344 }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  image={i.img}
                  alt="green iguana"
                />
                <CardContent sx={{p:1,display:"flex",flexDirection:"column",gap:"4px"}}>
                  <Typography gutterBottom variant="h5" fontSize={10} fontWeight={600} component="div" color="#BDBDBD">{i.category}</Typography>
                  <Typography fontSize={12} fontWeight={300} variant="body2" >{i.name}</Typography>
                  <Typography fontSize={14} fontWeight={600} variant="body2">{i.price} EUR</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
     );
}
 
export default ProductCard;