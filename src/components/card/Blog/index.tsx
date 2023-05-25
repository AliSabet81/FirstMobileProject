import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

interface IBlogCard {
  category: string,
  title: string,
  desc: string ,
  date: string
}

const BlogCard = (i:IBlogCard) => {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography fontSize={10} fontWeight={600} color="text.secondary" gutterBottom>{i.category}</Typography>
            <Typography fontSize={14} fontWeight={500} variant="h5" component="div">{i.title}</Typography>
            
            <Typography mt={"14px"} mb={"50px"} fontSize={10} variant="body2">{i.desc}</Typography>
          <Divider color='black'/>
          <Typography fontSize={10} fontWeight={300} sx={{ mb: 1.5 }} color="text.secondary">{i.date}</Typography>
          </CardContent>
        </Card>
      );
}
 
export default BlogCard;