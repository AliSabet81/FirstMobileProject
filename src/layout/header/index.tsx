import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SwipeableTemporaryDrawer from './menu';
import { Grid, IconButton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
// import Logo from "@/assets/Logo.png"
const Header = () => {
  

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box sx={{display: { xs: 'flex', md: 'none' } }}>
                {SwipeableTemporaryDrawer()}
              </Box>
            </Grid>
            <Grid item xs={6} sx={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                <Box sx={{width:66,height:31,alignSelf:"center"}} margin={"auto"} component={"img"} src={"Logo.png"}></Box>
            </Grid>
            <Grid item xs={3} sx={{display:"flex",paddingLeft:"0 !important"}}>
              <IconButton sx={{color:"white"}}><PersonIcon/></IconButton>
              <IconButton sx={{color:"white"}}><LocalMallIcon/></IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header ;