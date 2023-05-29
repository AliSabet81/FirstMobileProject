import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

 const SwipeableTemporaryDrawer =()=> {
  const [state, setState] = React.useState(
    false
  );

  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{backgroundColor:'black'}}
      role="presentation"
      // onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box sx={{display:'flex',flexDirection:'column',color:'white'}}>
        {['TRENDING', 'catalog', 'new' , 'sale' , 'brands'].map((text) => (
          <Button key={text} sx={{padding:1.5}}>
              <ListItemText sx={{textAlign:'center',color:'white'}} primary={text} />
              <ListItemIcon sx={{minWidth:0}}>
                <NavigateNextIcon sx={{color:"white"}}/>
              </ListItemIcon>
            </Button>
        ))}
        </Box>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}><IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{color:"white"}}
            >
              <MenuIcon />
            </IconButton></Button>
          
          <SwipeableDrawer
            anchor={"top"}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default SwipeableTemporaryDrawer