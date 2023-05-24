import { Box, ListItemButton, ListItemIcon, ListItemText, List ,Collapse} from "@mui/material";
import { ReactElement, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";

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
          {links.map((i)=> <h1>{i}</h1> )}
          
        </List>
      </Collapse>
        </Box>
     );
}
 
export default CollapseComponent;