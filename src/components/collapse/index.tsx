import { Box, ListItemButton, ListItemIcon, ListItemText, List ,Collapse, Typography} from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CollapseComponent = ({links,name}:{links:string[],name:string}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return ( 
        <Box>
            <ListItemButton onClick={handleClick} sx={{padding:0}}>
        
        <ListItemText primary={name} />
        {open ? <RemoveIcon /> : <AddIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          {links.map((i)=> <Typography key={i}>{i}</Typography> )}
          
        </List>
      </Collapse>
        </Box>
     );
}
 
export default CollapseComponent;