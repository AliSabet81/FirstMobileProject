import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import AcountDashboard from "./account";
import AccountInformation from "./information";
import AddressBook from "./address";

const DashboardScreen = () => {
    const [page, setPage] = useState('dashboard');

    const handleChange = (event: SelectChangeEvent) => {
      setPage(event.target.value);
    };
    const dashboardPage = (i:string) =>{
        switch (i) {
            case 'dashboard': return <AcountDashboard/>
            case 'information': return <AccountInformation/>
            case 'address': return <AddressBook/>
            case 'orders': return <AcountDashboard/>
            case 'wishlist': return <AcountDashboard/>
            case 'newsletter': return <AcountDashboard/>
        }
    }
    return ( 
        <Box>
            <FormControl sx={{ minWidth: 120,width:"90%",p:2 }}>
                <Select
                  value={page}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="dashboard">Account Dashboard</MenuItem>
                  <MenuItem value="information">Account Information</MenuItem>
                  <MenuItem value="address">Address Book</MenuItem>
                  <MenuItem value="orders">My Orders</MenuItem>
                  <MenuItem value="wishlist">My Wishlist</MenuItem>
                  <MenuItem value="newsletter">Newsletter Subscriptions</MenuItem>
                </Select>
            </FormControl>
            {dashboardPage(page)}
        </Box>
     );
}
 
export default DashboardScreen;