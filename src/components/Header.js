import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, } from "@mui/material";

import { NavLink } from "react-router-dom";


const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#0d0d0d" }} position="sticky">
        <Toolbar>
        <NavLink to="/" style={{ color: "#ffffff" }}>
           
      
         
          </NavLink>
          <Tabs  
              sx={{ ml: "auto" }}
          textColor= "inherit" 
          indicatorColor="primary" 
          value={value} 
          onChange={(e, val) => setValue(val)}>
<Tab LinkComponent={NavLink} className="fcolor" to="/add" label='Add Material'/>
<Tab LinkComponent={NavLink} className="fcolor" to="/materials"label='List Materials'/>



          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
