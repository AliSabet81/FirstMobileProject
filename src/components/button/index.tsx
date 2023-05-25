import { Button } from "@mui/material";

interface IButton {
    height:number,
    name : string,
    color:string,
    width?:string,
    Link?:string
}

const MyButton = (i:IButton) => {
    return ( 
        <Button href={i.Link} sx={{borderRadius:"0",fontWeight:600,border:2,borderColor:`${i.color}`, height:`${i.height}px`,width:`${i.width}`,margin:"auto",color:`${i.color}`}}>{i.name}</Button>
     );
}
 
export default MyButton;