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
    <div className="container py-10">
        {/* Logo section */}
        <div>
            <h1 className='font-bold text-2xl'>BrightMind Academy</h1>

        </div>
        {/* Menu section */}
        <div className='hidden lg:block'>
            <ul>
                {NavbarMenu.map((menu)=>(
                    <li key={menu.id}>
                        <a href={menu.path}>{menu.title}</a>
                    </li>
                )
                )

                }
            </ul>

        </div>
        {/* Mobile Hamburger menu section */}
    </div>
   </nav>  
  );
};

export default Navbar;