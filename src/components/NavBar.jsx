import React from 'react';
import '../style/NavBar.css';
import { NavLink, useNavigate} from "react-router-dom"

export default function NavBar() {
  const navigate=useNavigate();
  return (
    <div className='navbar'>
        <nav>
            <ul>
              
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/product'><li>Product</li></NavLink>
                <NavLink to='/users'><li>Users</li></NavLink>
                {/* replace=true to get the back histroy */}
                <button onClick={()=>navigate("/login",{replace:true})}>Login</button>

            </ul>
        </nav>
    </div>
  )
}
