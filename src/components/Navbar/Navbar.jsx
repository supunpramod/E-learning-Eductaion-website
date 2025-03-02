import React from 'react';
import { IoMdMenu } from "react-icons/io";

const NavbarMenu=[
{
        id:1,
        title:"Home",
        path:"/",
    
},
{
    id:2,
    title:"Services",
    path:"#",

},
{
    id:3,
    title:"About Us",
    path:"#",

},
{
    id:4,
    title:"Our Team",
    path:"#",

},

{
    id:5,
    title:"Contact Us",
    path:"#",

}


];
const Navbar=()=>{
  return(
   <nav>
    <div className="container">
        {/* Logo section */}
        <div>
            <h1>BrightMind Academy</h1>

        </div>
        {/* Menu section */}
        {/* Mobile Hamburger menu section */}
    </div>
   </nav>  
  );
};

export default Navbar;