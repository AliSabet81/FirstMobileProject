import { Grid, Typography } from "@mui/material";
import BlogCard from "../card/Blog";

const Blog = () => {
    return ( 
        <Grid p={1.7} bgcolor={"#F8F9FB"} gap={1.7} container>
            <Typography fontSize={18} fontWeight={400}>Blog</Typography>
            <Grid item xs={12}><BlogCard date={"21 January 2018 by guido"} category={"ARTICLE"} title={"Exactly What To Wear To Every Type Of Wedding This Summer"} desc={"A large part of the business here is building up the experience. Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money."} /> </Grid>
            <Grid item xs={12}><BlogCard date={"21 January 2018 by guido"} category={"TIPS"} title={"Exactly What To Wear To Every Type Of Wedding This Summer"} desc={"A large part of the business here is building up the experience. Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money."} /> </Grid>
            <Grid item xs={12}><BlogCard date={"21 January 2018 by guido"} category={"TIPS"} title={"Exactly What To Wear To Every Type Of Wedding This Summer"} desc={"A large part of the business here is building up the experience. Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money."}/> </Grid>
            <Grid item xs={12}><BlogCard date={"21 January 2018 by guido"} category={"ARTICLE"} title={"Exactly What To Wear To Every Type Of Wedding This Summer"} desc={"A large part of the business here is building up the experience. Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money."}/> </Grid>
        </Grid>
     );
}
 
export default Blog;