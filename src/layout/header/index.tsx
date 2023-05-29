import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SwipeableTemporaryDrawer from './menu';
import { Avatar, Grid, IconButton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import { ROUTES } from '../../Routes';
import { useContext, useEffect, useState } from 'react';
import { IUserType, userService } from '../../api/services/userService';
import { store } from '../../context';
import useLogin from '../../hooks/useLogin';


const Header = () => {
  const {UserLogin} = useContext(store)
  useLogin()
  const [user,setUser] = useState<IUserType>()
  useEffect(()=>{
    userService().then(res =>{
      setUser(res)
    })
  },[])

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box sx={{display: { xs: 'flex', md: 'none' } }}>
                <SwipeableTemporaryDrawer/>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{justifyContent:"center",alignItems:"center",display:"flex"}}>
              <Box component="a" href='/'>
                <Box sx={{width:66,height:31,alignSelf:"center"}} margin={"auto"} component={"img"} src={"Logo.png"}></Box>
              </Box>
            </Grid>
            <Grid item xs={3} sx={{display:"flex",paddingLeft:"0 !important"}}>
              {UserLogin ? <IconButton href={ROUTES.Acount} sx={{color:"white"}}><Avatar sx={{width:24,height:24}} src={user?.avatar}/></IconButton>:<IconButton href={ROUTES.Acount} sx={{color:"white"}}><PersonIcon/></IconButton>}
              {/* <IconButton href={ROUTES.Login} sx={{color:"white"}}><PersonIcon/></IconButton> */}
              <IconButton sx={{color:"white"}}><LocalMallIcon/></IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header ;